import type {response_pair_T} from '../response_pair_'
export declare function fetch__template_pair_<
	F extends ((...arg_a:any[])=>Promise<Response>)|any[],
	U = unknown,
	H = U,
>(
	fetch_fn:
		F extends (...arg_a:any[])=>Promise<Response>
			? F
			: F extends any[]
				? (...arg_a:F)=>Promise<Response>
				: never,
	hydrate:(unhydrated_val:U)=>H
):fetch__template_pair_T<F, H>
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
