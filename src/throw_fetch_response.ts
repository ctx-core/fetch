import { error_ctx_T, throw_error } from '@ctx-core/error'
export async function throw_fetch_response(response) {
	const error_message = await response.text()
	throw_error({
		http_status: response.status,
		error_message,
	} as error_ctx_T)
}
export {
	throw_fetch_response as throw__response__fetch
}
