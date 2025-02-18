"use client"
import * as React from "react"
import Image from "next/image"
import { Eye, EyeOff } from "lucide-react"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import toast from "react-hot-toast"

export type RegisterFormData = {
  username: string
  email:string
  password: string
}
export default function RegisterPage() {
  const [showPassword, setShowPassword] = React.useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>()

  const onSubmit = async (data: RegisterFormData) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    try {
       const response = await fetch(`${baseUrl}/api/v1/users`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
       })
       toast.success("account created successfully")
       console.log(response)
    } catch (error) {
        console.log(error)
        toast.error("failed to create account")
    }
  }

  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 bg-[#0078D4] lg:flex lg:items-center lg:justify-center">
        <Image
          src="/outlook.png"
          alt="Outlook Logo"
          width={200}
          height={200}
          className=""
          priority
        />
      </div>
      <div className="flex w-full items-center justify-center bg-white p-4 lg:w-1/2">
        <div className="w-full max-w-[440px] space-y-8">
          <div className="flex justify-center lg:hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20115223-kYRgidUl6Y7VPT0JAddkiVSfoP4DR6.png"
              alt="Outlook Logo"
              width={280}
              height={62}
              priority
            />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-3xl text-center font-bold text-blue-500">Register Account</h2>
            <div className="space-y-2">
              <Label htmlFor="username">User name:</Label>
              <Input
                id="username"
                {...register("username", { required: "Username is required" })}
                className="h-10 border-zinc-300"
              />
              {errors.username && <p className="text-sm text-red-500">{errors.username.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">email:</Label>
              <Input
                id="email"
                {...register("email", { required: "email is required" })}
                className="h-10 border-zinc-300"
              />
              {errors.username && <p className="text-sm text-red-500">{errors.username.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password:</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: "Password is required" })}
                  className="h-10 border-zinc-300 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-zinc-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-zinc-500" />
                  )}
                  <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                </Button>
              </div>
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>
            <Button type="submit" className="w-full bg-[#0078D4] text-white hover:bg-[#006CBC]">
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

