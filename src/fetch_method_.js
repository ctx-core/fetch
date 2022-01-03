/** @type {import('./fetch_method_.d.ts').fetch_method_} */
export const fetch_method_ = (params)=>{
	return (params.method || 'GET').toUpperCase()
}
export { fetch_method_ as _fetch_method, fetch_method_ as _method__fetch, }
