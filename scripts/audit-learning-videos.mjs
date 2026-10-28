import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
const root=process.cwd();
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const transpiled=ts.transpileModule(read("lib/youtube-video.ts"),{
  compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}
}).outputText;
const mod={exports:{}};
new Function("module","exports",transpiled)(mod,mod.exports);
const {parseYouTubeVideo}=mod.exports;
const id="dQw4w9WgXcQ"; // Parsing test fixture only. NEVER added to the published video registry.
for(const link of [
  "https://www.youtube.com/watch?v="+id,
  "https://youtu.be/"+id+"?t=12",
  "https://youtube.com/shorts/"+id,
  "https://www.youtube.com/live/"+id,
  "https://www.youtube-nocookie.com/embed/"+id,
  "youtube.com/watch?v="+id
]){
  const parsed=parseYouTubeVideo(link);
  assert.ok(parsed,link+" should be supported");
  assert.equal(parsed.id,id);
  assert.equal(parsed.watchUrl,"https://www.youtube.com/watch?v="+id);
  assert.equal(parsed.embedUrl,"https://www.youtube-nocookie.com/embed/"+id+"?rel=0");
}
for(const link of [
  "javascript:alert(1)",
  "https://youtube.com.evil.example/watch?v="+id,
  "https://example.com/watch?v="+id,
  "https://www.youtube.com/playlist?list=PL12345",
  "https://youtube.com/watch?v=not-an-id",
  "https://youtu.be/"+id+"/../../bad",
  "data:text/html,<iframe>",
  "http://localhost/watch?v="+id
]){
  assert.equal(parseYouTubeVideo(link),null,link+" must be rejected");
}
const registry=read("data/lesson-videos.ts");
assert.doesNotMatch(registry,/"url":\s*"https:\/\/(www\.)?youtube/);
const section=read("components/LearningVideoSection.tsx");
for(const pattern of [
  /lessonVideos\[materialKey\]/,/<iframe/,/allowFullScreen/,
  /rel="noopener noreferrer"/,/video\.watchUrl/,/parseYouTubeVideo\(item\.url\)/
])assert.match(section,pattern);
for(const pattern of [
  /localStorage/,/sessionStorage/,/STORAGE_PREFIX/,/addVideo/,/removeLocal/,
  /saveLocal/,/<input\b/,/<form\b/,/type="submit"/,
  /learning-video-add-panel/,/learning-video-editor/,/learning-video-remove/,
  /github\.com\/DescaAR\/DMath-Learning\/edit/
])assert.doesNotMatch(section,pattern,"Visitors must not have any video editing controls");
assert.match(section,/Video belum tersedia/);
assert.match(registry,/export const lessonVideos: Record<string, LessonVideo\[\]>/);
for(const [component,idKey] of [
  ["components/BookSectionPage.tsx",'subject.slug+"/"+section.slug'],
  ["components/DeepMaterialPage.tsx","material.slug"],
  ["components/IntegralRiemannDarbouxPage.tsx","material.slug"],
  ["components/ComplexAnalysisPage.tsx","material.slug"],
  ["app/kuliah/aljabar-linear/basis-dan-dimensi/page.tsx",'materialKey="aljabar-linear/basis-dan-dimensi"'],
  ["components/BasisDimensionEnglish.tsx",'materialKey="aljabar-linear/basis-dan-dimensi"']
]){
  const content=read(component);
  assert.match(content,/<LearningVideoSection/);
  assert.ok(content.includes(idKey),component+" missing correct material key");
}
assert.match(read("app/layout.tsx"),/modern-ui\.css/);
console.log("Video player audit passed: URL safety, GitHub-only read-only registry, six lesson layouts, and external YouTube link.");
