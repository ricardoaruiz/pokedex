/**
 * Essa provoca um atraso forçado na execução do código.
 * @param {*} delay
 * @returns {Promise<void>}
 */
export function forceDelay(delay) {
  return delay
    ? new Promise((resolve) => setTimeout(resolve, delay))
    : new Promise((resolve) => resolve());
}
