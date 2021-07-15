import node_fetch from 'node-fetch'
import type { fetch_T } from './fetch_T'
export const fetch:fetch_T = node_fetch as unknown as fetch_T
