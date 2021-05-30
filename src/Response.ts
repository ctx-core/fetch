import { no_dom } from '@ctx-core/dom'
export const Response = no_dom ? require('isomorphic-fetch').Response : window.Response
