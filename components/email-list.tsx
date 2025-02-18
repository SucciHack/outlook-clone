"use client"
import { Pin, ChevronDown } from "lucide-react"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Email {
  id: string
  sender: string
  subject: string
  preview: string
  time: string
  avatar?: string
  isPinned?: boolean
  category?: string
}

const emails: Email[] = [
  {
    id: "1",
    sender: "Elvia Atkins",
    subject: "Surprise Birthday Planning",
    preview: "Hi team, let's coordinate the surprise...",
    time: "8:32 AM",
    isPinned: true,
  },
  {
    id: "2",
    sender: "Mona Kane",
    subject: "Event Announcement Content Creation",
    preview: "Hi team, I hope you're all doing...",
    time: "3:55 PM",
    category: "Planning",
  },
  {
    id: "3",
    sender: "Contoso Airlines",
    subject: "Your flight reservation is confirmed",
    preview: "Hi Katri, your flight to Charlotte is confirm...",
    time: "2:41 PM",
  },
]

interface EmailListProps {
  onEmailSelect: (email: Email) => void
}

export function EmailList({ onEmailSelect }: EmailListProps) {
  return (
    <section className="w-[420px] shrink-0 overflow-hidden border-r bg-white">
      <div className="border-b px-3 py-2">
        <Tabs defaultValue="focused" className="w-full">
          <TabsList className="grid w-[180px] grid-cols-2">
            <TabsTrigger value="focused">Focused</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="h-[calc(100vh-49px)] overflow-y-auto">
        <div className="border-b">
          <div className="flex items-center px-3 py-2 text-sm text-zinc-600">
            <ChevronDown className="mr-2 h-4 w-4" />
            <span>Pinned</span>
          </div>
          {emails
            .filter((email) => email.isPinned)
            .map((email) => (
              <EmailItem key={email.id} email={email} onClick={() => onEmailSelect(email)} />
            ))}
        </div>

        <div>
          <div className="flex items-center px-3 py-2 text-sm text-zinc-600">
            <ChevronDown className="mr-2 h-4 w-4" />
            <span>Today</span>
          </div>
          {emails
            .filter((email) => !email.isPinned)
            .map((email) => (
              <EmailItem key={email.id} email={email} onClick={() => onEmailSelect(email)} />
            ))}
        </div>
      </div>
    </section>
  )
}

function EmailItem({ email, onClick }: { email: Email; onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex w-full items-start gap-3 px-3 py-2 text-left hover:bg-zinc-100">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
        {email.avatar || email.sender[0]}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <span className="font-semibold">{email.sender}</span>
          <span className="ml-2 shrink-0 text-xs text-zinc-500">{email.time}</span>
        </div>
        <div className="text-sm font-medium">{email.subject}</div>
        <div className="truncate text-sm text-zinc-600">{email.preview}</div>
        {email.category && (
          <span className="mt-1 inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
            {email.category}
          </span>
        )}
      </div>
      {email.isPinned && <Pin className="h-4 w-4 shrink-0 text-blue-600" />}
    </button>
  )
}

