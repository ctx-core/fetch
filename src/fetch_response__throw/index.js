import { error_o__throw } from '@ctx-core/error'
/**
 * @param {Response}response
 * @returns {Promise<void>}
 */
export async function fetch_response__throw(response) {
	const message = await response.text()
	error_o__throw(message, {
		http__status: response.status,
	})
}
export {
	fetch_response__throw as throw_fetch_response,
	fetch_response__throw as throw__response__fetch,
}
