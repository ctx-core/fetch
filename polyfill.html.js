import { assign } from '@ctx-core/object'
import '@ctx-core/fetch/env'
export function polyfill__fetch() {
	const ctx__ =
		assign({
			js: [],
			indentation: '',
			FETCH_URL: process.env.FETCH_URL
		}, ...arguments)
	return `<script type="text/javascript" src="${ctx__.FETCH_URL}"></script>`
}
