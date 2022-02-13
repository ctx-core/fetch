/**
 * @template Body
 * @param {Response}response
 * @return {Promise<[Body, Response]>}
 */
export async function response_pair_(response) {
	return [
		response.headers.get('Content-Type') === 'application/json'
		? await response.json()
		: await response.text(),
		response]
}
