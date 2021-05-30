export function fetch_method_(params:fetch_method_params__T) {
	return (params.method || 'GET').toUpperCase()
}
export type fetch_method_params__T = { method:string }
export {
	fetch_method_ as _fetch_method,
	fetch_method_ as _method__fetch,
}
