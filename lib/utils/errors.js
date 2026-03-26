import { errorResponse } from "./response"

/**
 * Base application error class.
 * All domain-specific errors extend this class so `withErrorHandler` can
 * distinguish known errors from unexpected ones.
 *
 * @extends {Error}
 */
class AppError extends Error {
    /**
     * @param {string} message - Human-readable error description.
     * @param {number} statusCode - HTTP status code to return to the client.
     */
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

/**
 * Thrown when a requested resource does not exist in the database.
 * Maps to HTTP 404.
 *
 * @extends {AppError}
 */
class NotFoundError extends AppError{
    /** @param {string} message */
    constructor(message){
        super(message, 404)
    }
}

/**
 * Thrown when incoming request data fails validation rules.
 * Maps to HTTP 400.
 *
 * @extends {AppError}
 */
class ValidationError extends AppError{
    /** @param {string} message */
    constructor(message){
        super(message, 400)
    }
}

/**
 * Thrown when a create operation would violate a uniqueness constraint
 * (e.g. attempting to create a second Profile document).
 * Maps to HTTP 409.
 *
 * @extends {AppError}
 */
class ConflictError extends AppError{
    /** @param {string} message */
    constructor(message){
        super(message, 409)
    }
}

export {
    AppError,
    NotFoundError,
    ValidationError,
    ConflictError,
}

/**
 * Higher-order function that wraps a Next.js route handler with centralised
 * error handling. Prevents raw error details from leaking to the client.
 *
 * Behaviour:
 * - `AppError` subclasses → their own `statusCode` + message.
 * - Any other error → 500 with the error message.
 * - All errors are logged via `console.error`.
 *
 * @param {(request: Request) => Promise<Response>} handler - The route handler to wrap.
 * @returns {(request: Request) => Promise<Response>} Wrapped handler with error handling.
 *
 * @example
 * export const GET = withErrorHandler(async (req) => {
 *   const data = await myService.getAll();
 *   return successResponse(data);
 * });
 */
export function withErrorHandler(handler) {
    return async function(request) {
        try {
            return await handler(request)
        
        } catch (error) {
            const status = error instanceof AppError ? error.statusCode : 500
            console.error('[API Error]',error)

            return errorResponse(error.message, status)
        }
    }
}

