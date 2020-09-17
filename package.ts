import { _package_version } from '@ctx-core/package'
export function _FETCH_URL() {
	return `https://cdnjs.cloudflare.com/ajax/libs/fetch/${_package_version('whatwg-fetch')}/fetch.min.js`
}
