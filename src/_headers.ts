import { no__dom } from '@ctx-core/dom'
export function _headers(init?: HeadersInit) {
	return no__dom ? init : new window.Headers(init)
}
