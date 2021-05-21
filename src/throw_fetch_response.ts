import { error_Ctx, throw_error } from '@ctx-core/error'
export async function throw_fetch_response(response:Response) {
	const error_message = await response.text()
	throw_error({
		http_status: response.status,
		error_message,
	} as error_Ctx)
}
export {
	throw_fetch_response as throw__response__fetch
}
