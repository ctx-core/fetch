import { no_dom } from '@ctx-core/dom';
export const Headers = no_dom ? require('isomorphic-fetch').Headers : window.Headers;
//# sourceMappingURL=src/Headers.js.map