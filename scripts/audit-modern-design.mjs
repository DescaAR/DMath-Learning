import assert from "node:assert/strict";
import fs from "node:fs";
const read=(file)=>fs.readFileSync(file,"utf8");
const home=read("app/page.tsx");
const lab=read("components/HomeMathShowcase.tsx");
const css=read("app/experience-ui.css");
const catalog=read("components/MaterialCatalogClient.tsx");
const header=read("components/SiteHeader.tsx");
const layout=read("app/layout.tsx");
const subjects=read("data/site-data.ts");

assert.match(home,/HomeMathShowcase/, "Homepage must retain interactive mathematical visualization");
assert.match(home,/subjects\.slice\(group\.start,group\.end\)/, "All field groups must render from canonical subject list");
assert.match(home,/encodeURIComponent\(subject\)/, "Subject links must link to relevant catalog filter");
assert.match(catalog,/<details className="catalog-material-list">/, "Catalog chapter lists must remain collapsible");
assert.match(catalog,/new URLSearchParams\(window\.location\.search\)/, "Deep links must initialize catalogue filter");
assert.match(header,/is-active/, "Header must indicate active navigation");
assert.match(layout,/experience-ui\.css/, "New visual design stylesheet must remain active");
const groupMatches=[...home.matchAll(/label:"[^"]+",start:(\d+),end:(\d+)/g)]
  .map(([,a,b])=>[Number(a),Number(b)]);
assert.deepEqual(groupMatches,[[0,6],[6,11],[11,16],[16,26]],"26-field directory must not omit any group");
const start=subjects.indexOf("export const subjects = [");
const stop=subjects.indexOf("];",start);
const list=subjects.slice(start,stop);
assert.equal([...list.matchAll(/"[^"]+"/g)].length,26,"Expect 26 explicitly named mathematics fields");
assert.match(lab,/Math\.sin\(frequency\*x\)/,"Plot must use mathematical function rather than placeholder data");
assert.match(lab,/type="range"/,"Interactive plot must support slider position input");
assert.match(lab,/aria-pressed=\{frequency===n\}/,"Frequency selector must be accessible");
for(const cls of ["dmath-home-hero-grid","dmath-lab-graph","dmath-paths-grid",
  "dmath-subject-grid","dmath-method-grid","filtered-material-list","textbook-article",
  "site-nav-link.is-active"]){
  assert.ok(css.includes(cls),"Modern layout style absent: "+cls);
}
assert.match(css,/@media\(max-width:760px\)/,"Responsive tablet breakpoint missing");
assert.match(css,/@media\(max-width:500px\)/,"Responsive mobile breakpoint missing");
assert.match(css, /prefers-reduced-motion/, "Reduced-motion accessibility missing");
assert.doesNotMatch(home,/Matematika SD|Matematika SMP|Matematika SMA/,"Homepage must focus university and ON-MIPA");
console.log("Modern design audit passed: 26 subjects, live math lab, discoverable catalog, responsive navigation and reading layout.");
