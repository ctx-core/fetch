import type { response_pair_T } from '../response_pair_'
export declare function fetch__template_pair_<
	F extends ((...arg_a:any[])=>Promise<Response>)|any[],
	T = unknown,
>(
	fetch_fn:F
):fetch__template_pair_T<F, T>
export type fetch__template_pair_T<
	F extends ((...arg_a:any[])=>Promise<Response>)|any[],
	T = unknown,
> = [
	F,
	(
		...arg_a:
			F extends (...arg_a:any[])=>Promise<Response>
			? Parameters<F>
			: F
)=>Promise<response_pair_T<T>>
]