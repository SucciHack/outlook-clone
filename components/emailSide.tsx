import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar";
import { Badge, Clock, Flag, Inbox, Mail, MailPlus, Send, Star } from 'lucide-react';
import { Button } from './ui/button';
export default function EmailSide() {
  return (
    <div>
      <Sidebar>
          <SidebarHeader className="border-b px-2 py-4">
            <Button className="w-full justify-start gap-2" size="lg">
              <MailPlus className="h-4 w-4" />
              New Message
            </Button>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Favorites</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Inbox className="h-4 w-4" />
                      <span>Inbox</span>
                      <Badge className="ml-auto">
                        128
                      </Badge>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Star className="h-4 w-4" />
                      <span>Starred</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Clock className="h-4 w-4" />
                      <span>Snoozed</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Send className="h-4 w-4" />
                      <span>Sent</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Mail className="h-4 w-4" />
                      <span>Drafts</span>
                      <Badge className="ml-auto">
                        2
                      </Badge>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Labels</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Flag  className="h-4 w-4 text-red-500" />
                      <span>Important</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Flag className="h-4 w-4 text-yellow-500" />
                      <span>Personal</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Flag className="h-4 w-4 text-blue-500" />
                      <span>Work</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
    </div>
  )
}
