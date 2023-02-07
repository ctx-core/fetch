import { error__throw } from '@ctx-core/error'
export async function throw_fetch_response(response) {
	const error_message = await response.text()
	error__throw({
		http_status: response.status,
		error_message
	})
}
export { throw_fetch_response as throw__response__fetch }
