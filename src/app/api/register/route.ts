import prisma from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"
import {z} from 'zod'
import bcrypt from 'bcrypt'


const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5)
})

export async function POST(request: NextRequest) {
  const body = await request.json()
  const validation = await schema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }

  const existingUser = await prisma.user.findUnique({
    where: { email: body.email },
  })

  if(existingUser)
    return NextResponse.json({ error: 'User with this email already exists' }, { status: 400 })

  const hashedPassword = await bcrypt.hash(body.password, 10)
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      hashedPassword
    },
  })

  return NextResponse.json({email: user.email})
}