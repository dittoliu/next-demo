import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest, {params}: {params: {id: number}}) {
    if(params.id > 10) {
        return NextResponse.json({error: 'user not found'}, { status: 404 }  )
    }
    return NextResponse.json({id: 1, name: 'Alpha'}, { status: 200 }  )
}

export async function PUT(request: NextRequest, {params}: {params: {id: number}}) {
    const body = await request.json()
    if(!body.name) {
        return NextResponse.json({error: 'Name is required'}, { status: 400 }  )
    }
    if(params.id > 10) {
        return NextResponse.json({error: 'user not found'}, { status: 404 }  )
    }
    return NextResponse.json({id: 1, name: body.name }, { status: 200 }  )
}

export async function DELETE(request: NextRequest, {params}: {params: {id: number}}) {
    if(params.id > 10) {
        return NextResponse.json({error: 'user not found'}, { status: 404 }  )
    }
    return NextResponse.json({message: 'User deleted successfully' }, { status: 200 }  )
}