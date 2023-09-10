import type { Response } from 'node-fetch'
export declare function response_pair__new<
	U,
	H = U
>(
	response:globalThis.Response|Response,
	hydrate?:(dehydrated_val:U)=>H
):Promise<response_pair_T<H>>
export type response_pair_T<T> = [
	T,
	(globalThis.Response|Response),
]
