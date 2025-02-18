"use client"
import { Reply, CornerUpRight, Forward } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface Email {
  id: string
  sender: string
  subject: string
  preview: string
  time: string
  avatar?: string
  recipients?: string[]
  body?: string
}

interface EmailViewProps {
  email: Email
}

export function EmailView({ email }: EmailViewProps) {
  return (
    <section className="flex h-screen flex-1 flex-col overflow-hidden bg-white">
      <div className="border-b px-6 py-4">
        <h2 className="text-xl font-semibold">{email.subject}</h2>
        <div className="mt-4 flex items-start gap-4">
          <Avatar className="h-10 w-10">
            <AvatarFallback>{email.sender[0]}</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{email.sender}</div>
                <div className="text-sm text-zinc-500">To: {email.recipients?.join("; ") || "me"}</div>
              </div>
              <div className="text-sm text-zinc-500">{email.time}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="prose max-w-none">{email.body || email.preview}</div>
      </div>

      <div className="border-t px-6 py-4">
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Reply className="mr-2 h-4 w-4" />
            Reply
          </Button>
          <Button variant="outline" size="sm">
            <CornerUpRight className="mr-2 h-4 w-4" />
            Reply all
          </Button>
          <Button variant="outline" size="sm">
            <Forward className="mr-2 h-4 w-4" />
            Forward
          </Button>
        </div>
      </div>
    </section>
  )
}

