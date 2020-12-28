import { no__dom } from '@ctx-core/dom'
export const Request = no__dom ? require('isomorphic-fetch').Request : window.Request
