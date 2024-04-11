import { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string,
  icon?: JSX.Element | null
}

export const Button = ({ content, className, icon, ...props }: IButton) => {
  return <button
    className={twMerge(`flex items-center gap-5 self-start rounded-lg bg-primary-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-600 md:text-base `, className)}
    {...props}
  >
    <span>{content}</span> {icon}
  </button>
}
