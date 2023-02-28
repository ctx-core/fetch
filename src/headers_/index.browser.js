/**
 * @param {HeadersInit}init
 * @returns {HeadersInit|undefined}
 * @private
 */
export function headers_(init) {
	return new window.Headers(init)
}
export { headers_ as _headers, }
