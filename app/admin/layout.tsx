"use client";

import React from "react";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminMenu } from "@/constants/adminMenu";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-8 gap-4 overflow-x-hidden">
      <aside className="sticky top-0 h-screen col-span-1 min-w-[200px] bg-red-50 py-10 px-4 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          {adminMenu.map(({ label, href, icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2 px-4 py-2 rounded ${
                pathname === href ? "bg-red-200" : "bg-transparent"
              } hover:bg-red-300 hover:gap-3 transition-all ease-in duration-200`}
            >
              {icon}
              <small className="text-sm text-gray-500">{label}</small>
            </Link>
          ))}
        </div>
        <div className="text-sm bg-red-100 hover:bg-red-200 hover:text-red-800 hover:gap-3 p-4 rounded transition-all ease-in-out duration-200 flex items-center gap-2">
          <FiLogOut size={20} />
          Logout
        </div>
      </aside>
      <main className="col-span-7 bg-white p-6">{children}</main>
    </div>
  );
}
