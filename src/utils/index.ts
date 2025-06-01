import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Essa função combina classes CSS usando clsx e twMerge.
 * Ela aceita uma lista de classes e remove duplicatas, garantindo que as classes Tailwind sejam mescladas corretamente.
 * @param inputs - Uma lista de classes CSS que podem ser strings, objetos ou arrays.
 * @returns
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Essa função capitaliza a primeira letra de uma string.
 * @param str
 * @returns
 */
export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
