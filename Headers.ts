import { no__dom } from '@ctx-core/dom'
export const Headers = no__dom ? require('isomorphic-fetch').Headers : window.Headers
