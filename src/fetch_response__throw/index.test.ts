import { equal, unreachable } from 'uvu/assert'
import { test } from 'uvu'
import { Response as _Response } from 'node-fetch'
import { fetch_response__throw } from '../index.js'
import { Buffer } from 'buffer'
test('fetch_response__throw', async ()=>{
	const error_msg = 'the error message'
	const buffer = Buffer.from(error_msg)
	const response = new _Response(buffer, { status: 501 })
	try {
		await fetch_response__throw(response)
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
