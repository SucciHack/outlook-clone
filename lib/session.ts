const secretKey = process.env.SESSION_KEY
const encodedKey = new TextEncoder().encode(secretKey)
import { User } from "@prisma/client"
import {jwtVerify, SignJWT} from "jose"
import { cookies } from "next/headers"

type payloadProps = {
    userId:string
    email:string
    username:string
    expiresAt: Date
}
export async function encrypt(payload:payloadProps) {
    return new SignJWT(payload)
    .setProtectedHeader({alg:"HS256"})
    .setIssuedAt()
    .setExpirationTime("3d")
    .sign(encodedKey)
}

export async function decrypt(session:string | undefined="") {
    const {payload} = await jwtVerify(session, encodedKey, {algorithms:["HS256"]})
    return payload
}

export async function createSession(user:User) {
    const expiresAt = new Date(Date.now() + 3*24*60*60*1000)
    const payload = {
        userId:user.id,
        email:user.email,
        username:user.username,
        expiresAt: expiresAt 
    }
    const session = await encrypt(payload)
    const cookieStore = await cookies()
    cookieStore.set("session", session, {
        httpOnly:true,
        secure:true,
        expires:expiresAt,
        sameSite:"lax"
    })
}

export async function updateSession() {
    const expiresAt = new Date(Date.now() + 3*24*60*60*1000)
    const cookieStore = await cookies()
    const session = cookieStore.get("session")?.value
    const payload = await decrypt(session)
    if(!session || payload){
        return null
    }
    cookieStore.set("session", session, {
        httpOnly:true,
        secure:true,
        expires:expiresAt,
        sameSite:"lax"
    })
}

export async function deleteSession() {
    const cookieStore = await cookies()
    cookieStore.delete("session")
}