import { equal, unreachable } from 'uvu/assert'
import { test } from 'uvu'
import { Response as _Response } from 'node-fetch'
import { throw_fetch_response } from '../index.js'
import { Buffer } from 'buffer'
test('throw_fetch_response', async ()=>{
	const error_msg = 'the error message'
	const buffer = Buffer.from(error_msg)
	const response = new _Response(buffer, { status: 501 })
	try {
		await throw_fetch_response(response as unknown as Response)
		unreachable('should have thrown')
	} catch (err) {
		equal(err, {
			http_status: 501,
			error_message: error_msg,
			upstream_error: {
				http_status: 501,
				error_message: error_msg,
			}
		})
	}
})
test.run()
