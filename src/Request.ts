import { no_dom } from '@ctx-core/dom'
export const Request = no_dom ? require('isomorphic-fetch').Request : window.Request
