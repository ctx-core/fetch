/**
 * @template Body
 * @param {Response}response
 * @return {Promise<[Body, Response]>}
 */
export async function response_pair_(response) {
	const text = await response.text()
	if (~response.headers.get('Content-Type')?.indexOf?.('application/json')) {
		return [text, response]
	}
	try {
		return [JSON.parse(text), response]
	} catch (err) {
		console.error('response_pair_|application/json|JSON.parse error:')
		console.error(response)
		console.error(text)
		throw err
	}
}
