import { response_pair_ } from './response_pair_/index.js'
/**
 * @param {import('./_types')._fetch}fetch
 * @return {import('./fetch_response_pair_.d.ts').fetch_response_pair_}
 * @private
 */
export function fetch_response_pair_2(fetch) {
	return async (input, init)=>{
		const response = await fetch(input, init)
		return await response_pair_(response)
	}
}
