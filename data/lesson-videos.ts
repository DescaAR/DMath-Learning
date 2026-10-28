/**
 * DMath Learning — video playlist published from GitHub only.
 *
 * Edit THIS file on branch github-pages-static to add or replace YouTube videos.
 * Visitors to the website can only watch; they cannot edit these entries.
 * Each published change is visible to everyone after GitHub Pages redeploys.
 *
 * The key is the part of the lesson URL following "/materi/".
 *
 * Example for https://descaar.github.io/DMath-Learning/materi/integral-riemann/
 *
 * "integral-riemann": [
 *   { title: "Integral Riemann — Pembahasan", url: "https://www.youtube.com/watch?v=VIDEO_ID" },
 * ],
 *
 * Example for a book lesson:
 * "analisis-real/SLUG-SUBMATERI": [
 *   { title: "Penjelasan Materi", url: "https://youtu.be/VIDEO_ID" },
 * ],
 *
 * Replace VIDEO_ID with the ID of a real YouTube video, and uncomment the
 * appropriate entry. To add several videos, put more objects in the array.
 *
 * Accepted formats: youtube.com/watch, youtu.be, /shorts, /live and /embed.
 * Do not put any dummy or unverified video into the live array.
 */
export type LessonVideo = { title?: string; url: string };

export const lessonVideos: Record<string, LessonVideo[]> = {
  // Videos are managed here, never via the public website.
};
