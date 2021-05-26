import { no_dom } from '@ctx-core/dom'
const fetch = no_dom ? require('isomorphic-fetch') : window.fetch
export { fetch }
