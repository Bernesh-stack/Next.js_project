import { clsx, type ClassValue } from "clsx"
import { Montaga } from "next/font/google"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date:string){
  return new Date(date).toLocaleDateString('en-US',{
    month:"long",
    day:"numeric",
    year:"numeric",

  })

}