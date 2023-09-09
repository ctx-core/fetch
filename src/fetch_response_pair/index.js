import { response_pair__new } from '../response_pair/index.js'
/**
 * @param {import('../_types')._fetch}fetch
 * @returns {typeof import('../fetch_response_pair').fetch_response_pair__new}
 */
export function fetch_response_pair__new2(fetch) {
	return async (input, init)=>{
		const response = await fetch(input, init)
		return await response_pair__new(response)
	}
}
export {
	fetch_response_pair__new2 as fetch_response_pair__,
	fetch_response_pair__new2 as fetch_response_pair_2,
}
