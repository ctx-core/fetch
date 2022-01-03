import { no_dom } from '@ctx-core/dom'
/** @type {import('./headers_').headers_} */
export const headers_ = (init)=>{
	return no_dom ? init : new window.Headers(init)
}
export { headers_ as _headers, }
