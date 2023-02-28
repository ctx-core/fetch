import { error__throw } from '@ctx-core/error'
export async function fetch_response__throw(response) {
	const error_message = await response.text()
	error__throw({
		http_status: response.status,
		error_message
	})
}
export {
	fetch_response__throw as throw_fetch_response,
	fetch_response__throw as throw__response__fetch,
}
