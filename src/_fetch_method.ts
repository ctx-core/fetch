export function _fetch_method(params: { method?: string }):string {
	return (params.method || 'GET').toUpperCase()
}
export {
	_fetch_method as _method__fetch
}
