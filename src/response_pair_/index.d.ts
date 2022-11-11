import type { Response } from 'node-fetch'
export declare function response_pair_<Body>(
	response:globalThis.Response|Response
):Promise<[Body, globalThis.Response|Response]>
export type response_pair_T<Body> = [Body, globalThis.Response|Response]
