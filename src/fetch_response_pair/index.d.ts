import type { _fetch } from '../_types'
export declare function fetch_response_pair__new2(fetch:_fetch):typeof fetch_response_pair__new
export declare function fetch_response_pair__new<Body>(
	input:RequestInfo, init?:RequestInit
):Promise<[Body, globalThis.Response]>
