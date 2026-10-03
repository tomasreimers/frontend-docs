'use client';

import { useEffect } from 'react';

const IDLE_DELAY_MS = 2000;

/**
 * Adds a `chrome-idle` class to <html> when the mouse hasn't moved for a
 * couple of seconds, and removes it as soon as it moves again. Styles in
 * styles.scss use this to fade out the navbar / sidebar / TOC while reading.
 *
 * Renders nothing.
 */
export function FadingChrome() {
  useEffect(() => {
    // Only fade the chrome for mouse-driven devices; on touch devices the
    // mouse never moves and the chrome would be permanently hidden.
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    const root = document.documentElement;
    let timeout: number | undefined;

    const wake = () => {
      root.classList.remove('chrome-idle');
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        root.classList.add('chrome-idle');
      }, IDLE_DELAY_MS);
    };

    wake();
    // Keydown too, so keyboard users (tabbing, search) also wake the chrome.
    document.addEventListener('mousemove', wake, { passive: true });
    document.addEventListener('keydown', wake);

    return () => {
      window.clearTimeout(timeout);
      document.removeEventListener('mousemove', wake);
      document.removeEventListener('keydown', wake);
      root.classList.remove('chrome-idle');
    };
  }, []);

  return null;
}
