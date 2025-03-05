"use client"

// import AdminNavbar from "@/components/admin/navbar"
import { SessionProvider } from "next-auth/react"
import { usePathname } from "next/navigation"
import type React from "react"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const isLoginPage = pathname === "/admin/login"

    return (
        <SessionProvider>
            {/* {!isLoginPage && <AdminNavbar />} */}
            <main className="min-h-screen bg-gray-50">{children}</main>
        </SessionProvider>
    )
}

