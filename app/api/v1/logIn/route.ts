import { createSession } from "@/lib/session";
import { db } from "@/prisma/db";
import bcrypt from "bcrypt"
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const data = await request.json()
    const {email,password} = data
    const existingUser = await db.user.findUnique({
        where:{
            email
        }
    })
    if(!existingUser){
        return NextResponse.json({
            data:null,
            message:"wrong credentials"
        },{
            status:409
        })
    }
    await createSession(existingUser)
    const isCorrectPassword = await bcrypt.compare(password, existingUser.password)
    if(!isCorrectPassword){
        return NextResponse.json({
            data:null,
            message:"wrong credentials"
        },{
            status:409
        })
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {password:removedPassword, others} = data
    return NextResponse.json({
        data:others,
        message:"loggedIn successfully"
    },{
        status:200
    })
}