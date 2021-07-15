import { FETCH_URL } from './FETCH_URL.js'
export function fetch_polyfill() {
	return `<script type="text/javascript" src="${FETCH_URL}"></script>`
}
