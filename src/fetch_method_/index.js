/**
 * @param {import('./index.d.ts').fetch_method___params_T}$
 * @returns {string}
 * @private
 */
export function fetch_method_($) {
  return ($.method || 'GET').toUpperCase()
}
export {
  fetch_method_ as _fetch_method,
  fetch_method_ as _method__fetch,
}
