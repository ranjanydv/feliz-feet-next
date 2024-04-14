import {OverviewIcon, UsersIcon, ProductsIcon} from "./adminMenuIcons";
import React from "react";

interface SidebarLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export const adminMenu: SidebarLink[] = [
  {label: "Overview", href: "/admin", icon: OverviewIcon,},
  {label: "Users", href: "/admin/users", icon: UsersIcon},
  {label: "Products", href: "/admin/products", icon: ProductsIcon},
];