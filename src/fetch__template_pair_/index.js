import {response_pair_} from '../response_pair_/index.js'
/** @type {import('./index.d.ts').fetch__template_pair_T}fetch__template_pair_T */
/**
 * @param {(...arg_a:any[])=>Promise<Response>}fetch_fn
 * @returns {fetch__template_pair_T}
 * @private
 */
export function fetch__template_pair_(
	fetch_fn
) {
	return [
		fetch_fn,
		async (...arg_a) =>
			fetch_fn(...arg_a)
				.then(response =>
					response_pair_(response))
	]
}
