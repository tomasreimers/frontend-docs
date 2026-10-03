'use client';

import { useConfig } from 'nextra-theme-docs';

/**
 * Small deco kicker above the page title: "CHAPTER 2" in spaced caps with a
 * hairline running to the edge (echoes the hero lockup and the sidebar
 * section labels). Deliberately NOT set in the display face: Limelight is
 * illegible at kicker sizes — the deco here comes from tracking + hairline.
 */
export function ChapterKicker() {
  const {
    normalizePagesResult: { activePath },
  } = useConfig();

  // "Chapter 2: CSS" -> "Chapter 2" (the rest is redundant with the title).
  const chapter = activePath[0].title.split(':')[0];

  return <div className="deco-kicker">{chapter}</div>;
}
