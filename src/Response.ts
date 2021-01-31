import { no__dom } from '@ctx-core/dom'
export const Response = no__dom ? require('isomorphic-fetch').Response : window.Response
