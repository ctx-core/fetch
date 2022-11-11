import { Headers, Response as _Response } from 'node-fetch'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { response_pair_ } from '../index.js'
test('response_pair_|no Content-Type header', async ()=>{
	const body = 'the body'
	const response = new _Response(body, { headers: new Headers({}) })
	equal([body, response], await response_pair_(response))
})
test('response_pair_|Content-Type|text/html', async ()=>{
	const body = '<html><body>the body</body></html>'
	const response = new _Response(body, {
		headers: new Headers({ 'Content-Type': 'text/html' })
	})
	equal([body, response], await response_pair_(response))
})
test('response_pair_|Content-Type|application/json', async ()=>{
	const body = { foo: 'bar ' }
	const response = new _Response(JSON.stringify(body), {
		headers: new Headers({ 'Content-Type': 'application/json' })
	})
	equal([body, response], await response_pair_(response))
})
test('response_pair_|Content-Type|application/json; charset=utf8', async ()=>{
	const body = { foo: 'bar ' }
	const response = new _Response(JSON.stringify(body), {
		headers: new Headers({ 'Content-Type': 'application/json; charset=utf8' })
	})
	equal([body, response], await response_pair_(response))
})
test.run()
// type Response = globalThis.Response
