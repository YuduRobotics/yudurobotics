// utils/highlightWords.ts
import type { JSX } from "react";

export function highlightWords(
  heading: string,
  wordsToHighlight: string[],
  highlightClass: string
): JSX.Element[] {
  // Create a regex to find the words that need to be highlighted
  const regex = new RegExp(`(${wordsToHighlight.join("|")})`, "gi");
  // Split the heading and wrap the words to be highlighted
  const parts = heading?.split(regex);

  // Return the parts, highlighting the matching words
  return parts?.map((part, index) => {
    if (wordsToHighlight.includes(part)) {
      return (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <span key={index} className={highlightClass}>
          {part}
        </span>
      );
    }
    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
    return <span key={index}>{part}</span>;
  });
}
