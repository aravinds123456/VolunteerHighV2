// Splits text on URLs and returns an array of strings / <a> elements,
// so notes containing plain-text links (as the Swift Text views did)
// render as clickable links on web, where users actually need to click them.
import React from 'react';

export function linkify(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  return parts.map((part, i) =>
    urlRegex.test(part) && part.startsWith('http')
      ? <a key={i} href={part} target="_blank" rel="noopener noreferrer">{part}</a>
      : <React.Fragment key={i}>{part}</React.Fragment>
  );
}
