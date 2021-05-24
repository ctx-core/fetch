export function _fetch_method(params:_fetch_method_params_T) {
	return (params.method || 'GET').toUpperCase()
}
export type _fetch_method_params_T = { method:string }
export { _fetch_method as _method__fetch }
