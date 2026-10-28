/**
 * Public video library for DMath Learning (GitHub Pages).
 *
 * To publish a video for every visitor, add an entry with the material key:
 *   "analisis-real/himpunan-dan-fungsi": [
 *     { title: "Limit Barisan", url: "https://www.youtube.com/watch?v=VIDEO_ID" },
 *   ],
 * Copy the part of the material URL after /materi/ as its key.
 * or for standalone material:
 *   "integral-riemann": [{ title: "Integral Riemann", url: "https://youtu.be/VIDEO_ID" }]
 *
 * Supported links: youtube.com/watch, youtu.be, /shorts, /live, and /embed.
 * No video is hardcoded until an actual video has been curated.
 */
export type LessonVideo = { title?: string; url: string };
export const lessonVideos: Record<string, LessonVideo[]> = {
  // Paste your own real YouTube links here; never use an example ID as a live link.
};
