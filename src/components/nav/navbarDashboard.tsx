import Link from "next/link"

export const NavbarDashboard = () => {
  return <header>
    <nav className="grid shadow-sm p-4 sm:ml-64">
      <Link href={''} className="justify-self-end">User</Link>
    </nav>
  </header>
}
