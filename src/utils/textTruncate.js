import { useState } from "react";

export const useTextTruncate = (text, maxWords = 20) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split text into words
  const words = text.split(" ");
  const shouldTruncate = words.length > maxWords;

  // Get truncated text
  const truncatedText = shouldTruncate
    ? words.slice(0, maxWords).join(" ")
    : text;

  // Toggle expanded state
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return {
    displayText: isExpanded ? text : truncatedText,
    shouldTruncate,
    isExpanded,
    toggleExpanded,
    wordCount: words.length,
    maxWords,
  };
};
