import { _fibonacci_number } from '@ctx-core/fibonacci'
import { sleep } from '@ctx-core/sleep'
/** @type {import('./waitfor_fibonacci_backoff.d.ts').waitfor_fibonacci_backoff} */
export const waitfor_fibonacci_backoff = async (fn, delay = 500)=>{
	let response
	let delay_n = 1
	while (true) {
		response = await fn()
		if (response.status === 429) {
			const number__fibonacci = _fibonacci_number(delay_n)
			const delay__ = number__fibonacci * 500
			delay = delay + delay__
			await sleep(delay)
			delay_n++
			continue
		}
		return response
	}
}
export {
	waitfor_fibonacci_backoff as waitfor__backoff__fibonacci,
	waitfor_fibonacci_backoff as _waitfor__ratelimit__backoff__fibonacci,
}
