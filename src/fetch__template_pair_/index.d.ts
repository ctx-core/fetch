import type {response_pair_T} from '../response_pair_'
export declare function fetch__template_pair_<
	F extends ((...arg_a:any[])=>Promise<Response>)|any[],
	T = unknown,
>(
	fetch_fn:
		F extends (...arg_a:any[])=>Promise<Response>
			? F
			: F extends any[]
				? (...arg_a:F)=>Promise<Response>
				: never
):fetch__template_pair_T<F, T>
export type fetch__template_pair_T<
	F extends ((...arg_a:any[])=>Promise<Response>)|any[],
	T = unknown,
> = [
	F extends (...arg_a:any[])=>Promise<Response>
		? F
		: F extends any[]
			? (...arg_a:F)=>Promise<Response>
			: never,
	(
		...arg_a:
			F extends (...arg_a:any[])=>Promise<Response>
				? Parameters<F>
				: F extends any[]
					? F
					: never
	)=>Promise<response_pair_T<T>>
]
