import { useEffect } from "react";

/**
 * Custom hook for keyboard shortcuts
 * @param {Object} options - Configuration options
 * @param {Function} options.onEnter - Function to call when Enter key is pressed
 * @param {Function} options.onEscape - Function to call when Escape key is pressed
 * @param {boolean} options.enabled - Whether the shortcuts are enabled (default: true)
 * @param {Array} options.dependencies - Dependencies for the useEffect hook
 */
export const useKeyboardShortcuts = ({
  onEnter,
  onEscape,
  enabled = true,
  dependencies = [],
}) => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event) => {
      // Handle Enter key
      if (event.key === "Enter" && onEnter) {
        event.preventDefault();
        onEnter();
      }

      // Handle Escape key
      if (event.key === "Escape" && onEscape) {
        event.preventDefault();
        onEscape();
      }
    };

    // Add event listener
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [enabled, onEnter, onEscape, ...dependencies]);
};

/**
 * Utility function for handling Enter key in form inputs
 * @param {Function} onSubmit - Function to call when Enter is pressed
 * @param {Function} onShiftEnter - Optional function for Shift+Enter (defaults to onSubmit)
 */
export const handleEnterKey = (onSubmit, onShiftEnter = onSubmit) => {
  return (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.shiftKey) {
        onShiftEnter();
      } else {
        onSubmit();
      }
    }
  };
};

/**
 * Utility function for handling Escape key
 * @param {Function} onEscape - Function to call when Escape is pressed
 */
export const handleEscapeKey = (onEscape) => {
  return (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onEscape();
    }
  };
};
