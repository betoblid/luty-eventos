import { type ClassValue, clsx } from "clsx"
import crypto from "crypto"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateToken() {
  return crypto.randomBytes(32).toString("hex")
}

export function getBaseUrl() {
  if (typeof window !== "undefined") {
    return window.location.origin
  }

  return process.env.NEXT_PUBLIC_APP_URL || `http://localhost:${process.env.PORT || 3000}`
}

export function formatDate(date: Date | string) {
  const d = new Date(date)
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

