import { type HttpError } from '@ctx-core/error'
import { Buffer } from 'buffer'
import { Response as _Response } from 'node-fetch'
import { test } from 'uvu'
import { equal, unreachable } from 'uvu/assert'
import { fetch_response__throw } from '../index.js'
test('fetch_response__throw', async ()=>{
	const error_msg = 'the error message'
	const buffer = Buffer.from(error_msg)
	const response = new _Response(buffer, { status: 501 })
	try {
		await fetch_response__throw(response)
		unreachable('should have thrown')
	} catch (_err) {
		const err = _err as HttpError
		equal(err.http_status, 501)
		equal(err.error_message, error_msg)
	}
})
test.run()
