import { no_dom } from '@ctx-core/dom';
export function headers_(init) {
    return no_dom ? init : new window.Headers(init);
}
export { headers_ as _headers, };
//# sourceMappingURL=src/headers_.js.map