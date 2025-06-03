import { twMerge } from "tailwind-merge";
import clsx from "clsx";

/**
 * Combines class names conditionally and merges Tailwind classes.
 * @param  {...any} inputs - Strings, objects, or arrays of class names.
 * @returns {string} - A merged string of class names.
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
