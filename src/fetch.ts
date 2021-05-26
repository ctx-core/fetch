import { no_dom } from '@ctx-core/dom'
import type { fetch_T } from './fetch_T'
const fetch:fetch_T = no_dom ? require('isomorphic-fetch') : window.fetch
export { fetch }
