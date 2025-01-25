"use client";

import type * as React from "react";

import {
  Calendar,
  Clipboard,
  CreditCard,
  FileText,
  LayoutDashboard,
  LifeBuoyIcon as LifeBuoy_2,
  SendIcon as Send_2,
  Settings2Icon as Settings2_2,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";

import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";

const data = {
  user: {
    name: "Dr. Smith",
    email: "",
    avatar: "",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Patients",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Patient List",
          url: "#",
        },
        {
          title: "Add Patient",
          url: "#",
        },
      ],
    },
    {
      title: "Medical Records",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "View Records",
          url: "#",
        },
        {
          title: "Create Record",
          url: "#",
        },
      ],
    },
    {
      title: "Scheduling",
      url: "#",
      icon: Calendar,
      items: [
        {
          title: "Appointments",
          url: "#",
        },
        {
          title: "Staff Schedule",
          url: "#",
        },
      ],
    },
    {
      title: "Inventory",
      url: "#",
      icon: Clipboard,
      items: [
        {
          title: "Medications",
          url: "#",
        },
        {
          title: "Equipment",
          url: "#",
        },
      ],
    },
    {
      title: "Billing",
      url: "#",
      icon: CreditCard,
      items: [
        {
          title: "Invoices",
          url: "#",
        },
        {
          title: "Insurance Claims",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2_2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Security",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy_2,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send_2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = authClient.useSession();

  if (!session) {
    return null;
  }
  console.log(session);
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <FileText className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">MediCare EHR</span>
                  <span className="truncate text-xs">
                    Electronic Health Records
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={session.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
