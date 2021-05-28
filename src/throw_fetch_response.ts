import { error_ctx_I, throw_error } from '@ctx-core/error'
export async function throw_fetch_response(response:Response) {
	const error_message = await response.text()
	throw_error({
		http_status: response.status,
		error_message,
	} as error_ctx_I)
}
export {
	throw_fetch_response as throw__response__fetch
}
