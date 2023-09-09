/**
 * @param {import('./index.d.ts').fetch_method___params_T}fetch_method___params
 * @returns {string}
 * @private
 */
export function fetch_method__new(fetch_method___params) {
  return (fetch_method___params.method || 'GET').toUpperCase()
}
export {
  fetch_method__new as fetch_method_,
  fetch_method__new as _fetch_method,
  fetch_method__new as _method__fetch,
}
