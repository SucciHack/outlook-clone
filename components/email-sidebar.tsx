import {
  Archive,
  Calendar,
  CheckSquare,
  ChevronDown,
  Forward,
  LayoutGrid,
  MessageSquare,
  MoreVertical,
  Reply,
  ReplyAll,
  Search,
  Trash2,
  User2,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function EmailClient() {
  return (
      <div className="grid h-screen grid-cols-[auto_1fr_1fr_300px]">
        {/*  */}

        <div className="flex flex-col border-r">
          <div className="flex items-center gap-2 border-b px-4 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              className="flex-1"
              placeholder="Search emails..."
              type="search"
            />
            <Button variant="ghost" size="icon">
              <LayoutGrid className="h-4 w-4" />
            </Button>
          </div>
          <Tabs defaultValue="focused" className="flex-1">
            <TabsList className="w-full justify-start rounded-none border-b px-4 py-2">
              <TabsTrigger value="focused" className="relative">
                Focused
              </TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
            <ScrollArea className="h-[calc(100vh-8rem)]">
              <TabsContent value="focused" className="m-0">
                <div className="divide-y">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="flex gap-4 p-4 hover:bg-muted/50">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?${i}`} />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold">John Doe</div>
                          <div className="text-sm text-muted-foreground">
                            2 hours ago
                          </div>
                        </div>
                        <div className="text-sm font-medium">
                          Re: Project Update Meeting
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Here are the meeting notes from yesterday{"'"}s...
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="other" className="m-0">
                <div className="p-4 text-center text-sm text-muted-foreground">
                  No other messages
                </div>
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </div>

        <div className="flex flex-col border-r">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">John Doe</div>
                <div className="text-sm text-muted-foreground">
                  Re: Project Update Meeting
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Archive className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <ScrollArea className="flex-1 px-4 py-6">
            <div className="mx-auto max-w-2xl space-y-8">
              <div>
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1.5">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">John Doe</div>
                      <div className="text-sm text-muted-foreground">
                        john@example.com
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      to me, Team <ChevronDown className="inline h-3 w-3" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="[&>*]:text-sm [&>*]:leading-relaxed">
                <p>Hi everyone,</p>
                <br />
                <p>
                  Here are the meeting notes from yesterday{"'"}s project update
                  meeting. Please review and let me know if you have any
                  questions or concerns.
                </p>
                <br />
                <p>Best regards,</p>
                <p>John</p>
              </div>
            </div>
          </ScrollArea>
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Button className="gap-2">
                <Reply className="h-4 w-4" /> Reply
              </Button>
              <Button variant="secondary" size="icon">
                <ReplyAll className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon">
                <Forward className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> Calendar
              </CardTitle>
              <CardDescription>Today{"'"}s Schedule</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium">Team Standup</div>
                  <div className="text-sm text-muted-foreground">
                    10:00 AM - 10:30 AM
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <User2 className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium">1:1 with Manager</div>
                  <div className="text-sm text-muted-foreground">
                    2:00 PM - 3:00 PM
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full gap-2">
                <MessageSquare className="h-4 w-4" /> Join Teams Meeting
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckSquare className="h-4 w-4" /> Tasks
              </CardTitle>
              <CardDescription>Today{"'"}s Tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="pt-1">
                    <div className="h-4 w-4 rounded-sm border" />
                  </div>
                  <div className="grid gap-1">
                    <div className="font-medium">Review PRs</div>
                    <div className="text-sm text-muted-foreground">
                      Due by 5:00 PM
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="pt-1">
                    <div className="h-4 w-4 rounded-sm border" />
                  </div>
                  <div className="grid gap-1">
                    <div className="font-medium">Update Documentation</div>
                    <div className="text-sm text-muted-foreground">
                      Due by EOD
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  );
}
