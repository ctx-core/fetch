import { sleep } from '@ctx-core/sleep'
import { _number__fibonacci } from '@ctx-core/fibonacci'
import { no__dom } from '@ctx-core/dom'
import { error_ctx_type, throw_error } from '@ctx-core/error'
const fetch = no__dom ? require('isomorphic-fetch') : window.fetch
export { fetch }
export const Headers = no__dom ? require('isomorphic-fetch').Headers : window.Headers
export const Request = no__dom ? require('isomorphic-fetch').Request : window.Request
export const Response = no__dom ? require('isomorphic-fetch').Response : window.Response
export function _headers(init) {
	return no__dom ? init : new window.Headers(init)
}
export function _method__fetch(ctx__fetch):string {
	return (ctx__fetch.method || 'GET').toUpperCase()
}
export async function throw__response__fetch(response) {
	const error_message = await response.text()
	throw_error({
		http_status: response.status,
		error_message,
	} as error_ctx_type)
}
export async function waitfor__backoff__fibonacci(fn, delay = 500) {
	let response
	let delay_n = 1
	while (true) {
		response = await fn()
		if (response.status === 429) {
			const number__fibonacci = _number__fibonacci(delay_n)
			const delay__ = number__fibonacci * 500
			delay = delay + delay__
			await sleep(delay)
			delay_n++
			continue
		}
		return response
	}
}
export const _waitfor__ratelimit__backoff__fibonacci = waitfor__backoff__fibonacci
