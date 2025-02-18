import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST(request:NextRequest) {
    const data = await request.json()
    const {email, password, username}= data
    const existingUser = await db.user.findUnique({
        where:{
            email
        }
    })
    if(existingUser){
        return NextResponse.json({
            data:null,
            message:"user already exists"
        },{
            status:409
        })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await db.user.create({
        data:{
            email,
            password:hashedPassword,
            username
        }
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {password:removedPassword, ...others} = newUser
    return NextResponse.json({
        data:others,
        message:"created successfully",
        error:null
    },{
        status:201
    })
}