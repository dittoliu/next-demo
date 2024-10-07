import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
    const user = await prisma.user.findUnique({ where: { id: parseInt(params.id)} })
    if(!user) {
        return NextResponse.json({error: 'user not found'}, { status: 404 }  )
    }
    return NextResponse.json(user)
}

// export async function PUT(request: NextRequest, {params}: {params: {id: string}}) {
//     const body = await request.json()
//     const validation = schema.safeParse(body)
//     if(!validation.success) {
//         return NextResponse.json(validation.error.errors, { status: 400 }  )
//     }
//     if(params.id > 10) {
//         return NextResponse.json({error: 'user not found'}, { status: 404 }  )
//     }
//     return NextResponse.json({id: 1, name: body.name }, { status: 200 }  )
// }

// export async function DELETE(request: NextRequest, {params}: {params: {id: string}}) {
//     if(params.id > 10) {
//         return NextResponse.json({error: 'user not found'}, { status: 404 }  )
//     }
//     return NextResponse.json({message: 'User deleted successfully' }, { status: 200 }  )
// }