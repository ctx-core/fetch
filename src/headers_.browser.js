/** @type {import('./headers_').headers_} */
export const headers_ = (init)=>{
	return new window.Headers(init)
}
export { headers_ as _headers, }