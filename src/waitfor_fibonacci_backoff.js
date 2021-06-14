import { _fibonacci_number } from '@ctx-core/fibonacci';
import { sleep } from '@ctx-core/sleep';
export async function waitfor_fibonacci_backoff(fn, delay = 500) {
    let response;
    let delay_n = 1;
    while (true) {
        response = await fn();
        if (response.status === 429) {
            const number__fibonacci = _fibonacci_number(delay_n);
            const delay__ = number__fibonacci * 500;
            delay = delay + delay__;
            await sleep(delay);
            delay_n++;
            continue;
        }
        return response;
    }
}
export { waitfor_fibonacci_backoff as waitfor__backoff__fibonacci, waitfor_fibonacci_backoff as _waitfor__ratelimit__backoff__fibonacci, };
//# sourceMappingURL=src/waitfor_fibonacci_backoff.js.map