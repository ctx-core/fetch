import { throw_error } from '@ctx-core/error'
/** @type {import('./throw_fetch_response.d.ts').throw_fetch_response} */
export const throw_fetch_response = async response=>{
	const error_message = await response.text()
	throw_error({
		http_status: response.status,
		error_message
	})
}
export { throw_fetch_response as throw__response__fetch }
