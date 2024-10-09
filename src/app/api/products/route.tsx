import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import schema from "./schema";

// export async function GET(request: NextRequest) {
//   const products = await prisma.product.findMany()
//   return NextResponse.json(products)
// }

// export async function POST(request: NextRequest) {
//   const body = await request.json()
//   const validation = await schema.safeParse(body)
//   if (!validation.success) {
//     return NextResponse.json(validation.error.errors, { status: 400 })
//   }

//   const product = await prisma.product.findUnique({
//     where: { name: body.name },
//   })

//   if (product) {
//     return NextResponse.json({ error: 'Product with this name already exists' }, { status: 400 })
//   }

//   const createdProduct = await prisma.product.create({
//     data: {
//       name: body.name,
//       price: body.price,
//     }
//   })
//   return NextResponse.json(createdProduct, { status: 201 })
// }