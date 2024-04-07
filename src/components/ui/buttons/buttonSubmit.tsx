"use client"

import { useFormStatus } from "react-dom"
import { LoaderCircle } from "lucide-react"

import { Button } from "./button"

export const ButtonSubmit = ({ content, className }: { content: string, className: string }) => {
  const { pending } = useFormStatus()
  return <Button content={content} className={className} type="submit" disabled={pending} icon={pending ? <LoaderCircle className="animate-spin"/> : null} />
}
