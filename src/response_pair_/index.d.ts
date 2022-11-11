import type { Response } from 'node-fetch'
export declare function response_pair_<Body>(
	response:globalthis.Response|Response
):Promise<[Body, globalthis.Response|Response]>
export type response_pair_T<Body> = [Body, globalthis.Response|Response]
