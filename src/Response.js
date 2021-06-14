import { no_dom } from '@ctx-core/dom';
export const Response = no_dom ? require('isomorphic-fetch').Response : window.Response;
//# sourceMappingURL=src/Response.js.map