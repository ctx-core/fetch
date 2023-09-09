/** @type {import('.').Headers} */
export const { Headers } = window
/**
 * @param {HeadersInit}[init]
 * @returns {HeadersInit|undefined}
 * @private
 */
export function headers__new(init) {
	return new window.Headers(init)
}
export {
	headers__new as headers_,
	headers__new as _headers,
}
