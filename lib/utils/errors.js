import { errorResponse } from "./response"

class AppError extends Error {
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

class NotFoundError extends AppError{
    constructor(message){
        super(message, 404)
    }
}

class ValidationError extends AppError{
    constructor(message){
        super(message, 400)
    }
}

class ConflictError extends AppError{
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

