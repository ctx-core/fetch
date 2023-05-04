import { response_pair_ } from '../response_pair_/index.js'
/**
 * @param {import('../_types')._fetch}fetch
 * @returns {typeof import('../fetch_response_pair_').fetch_response_pair_}
 */
export function fetch_response_pair__(fetch) {
	return async (input, init)=>{
		const response = await fetch(input, init)
		return await response_pair_(response)
	}
}
export {
	fetch_response_pair__ as fetch_response_pair_2
}