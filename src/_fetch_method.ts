export function _fetch_method(fetch_ctx):string {
	return (fetch_ctx.method || 'GET').toUpperCase()
}
export {
	_fetch_method as _method__fetch
}
