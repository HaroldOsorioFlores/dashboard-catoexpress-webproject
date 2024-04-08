import Link from "next/link"

export const LinkAside = ({ name, icon, href }: { name: string, href: string, icon: JSX.Element }) => {
  return <Link href={href} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
    {icon}
    <span className="ms-3">{name}</span>
  </Link>
}
