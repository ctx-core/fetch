import type { Response } from 'node-fetch'
export declare function response_pair_<
	U,
	H = U
>(
	response:globalThis.Response|Response,
	hydrate?:(unhydrated_val:U)=>H
):Promise<response_pair_T<H>>
export type response_pair_T<T> = [
	T,
	(globalThis.Response|Response),
]
