import { NextResponse } from "next/server";

/**
 * Builds a successful JSON response with a consistent envelope.
 *
 * @param {*} data - The payload to include in the response body.
 * @param {number} [status=200] - HTTP status code (e.g. 200, 201).
 * @returns {NextResponse} JSON response: `{ success: true, data, error: null }`.
 */
function successResponse(data, status = 200){
    return NextResponse.json( 
        {success: true, data: data, error: null},
        {status: status}
    )

}

/**
 * Builds an error JSON response with a consistent envelope.
 * Internal error details are never leaked — only the provided message is returned.
 *
 * @param {string} message - Human-readable error description sent to the client.
 * @param {number} [status=500] - HTTP status code (e.g. 400, 404, 409, 500).
 * @returns {NextResponse} JSON response: `{ success: false, data: null, error: message }`.
 */
function errorResponse(message, status = 500){
    return NextResponse.json(
        {success: false, data: null, error: message},
        {status: status}
    )

}

export{
    successResponse,
    errorResponse
}