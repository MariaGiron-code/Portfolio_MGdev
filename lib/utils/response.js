import { NextResponse } from "next/server";

function successResponse(data, status = 200){
    return NextResponse.json( 
        {success: true, data: data, error: null},
        {status: status}
    )

}

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