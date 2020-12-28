import { no__dom } from '@ctx-core/dom'
const fetch = no__dom ? require('isomorphic-fetch') : window.fetch
export { fetch }
