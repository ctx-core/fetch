/** @typedef {import('@ctx-core/types').json_T}json_T */
/**
 * @param {Response}response
 * @returns {json_T}
 * @private
 */
export function response__o_(response) {
	return /** @type {json_T} */JSON.stringify({
		headers: response.headers,
		ok: response.ok,
		redirected: response.redirected,
		status: response.status,
		statusText: response.statusText,
		type: response.type,
		url: response.url,
	})
}
