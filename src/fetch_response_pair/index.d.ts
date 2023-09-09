import type { _fetch } from '../_types'
export declare function fetch_response_pair__new2(fetch:_fetch):typeof fetch_response_pair_
export {
	fetch_response_pair__new2 as fetch_response_pair__,
	fetch_response_pair__new2 as fetch_response_pair_2,
}
export declare function fetch_response_pair_<Body>(
	input:RequestInfo, init?:RequestInit
):Promise<[Body, globalThis.Response]>
