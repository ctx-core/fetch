/** @typedef {import('./index.d.ts').response_o_T}response_o_T */
/**
 * @param {Response}response
 * @returns {response_o_T}
 * @private
 */
export function response_o__new(response) {
	return /** @type {response_o_T} */{
		headers: response.headers,
		ok: response.ok,
		redirected: response.redirected,
		status: response.status,
		statusText: response.statusText,
		type: response.type,
		url: response.url,
	}
}
export {
	response_o__new as response_o_,
}