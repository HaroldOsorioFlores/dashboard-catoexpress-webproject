"use client"

import { LayoutDashboard, LogOut, Menu, Settings, User, Users } from "lucide-react"

import { CatoexpressLogo } from "../icons"
import { DropdownAside, LinkAside } from "../ui"
import { useVisibleComponent } from "@/hooks"

export const Aside = () => {
  const { ref, setVisibleComponent, visibleComponent } = useVisibleComponent(false, false)
  return <>
    <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={() => { setVisibleComponent(!visibleComponent) }}>
      <span className="sr-only">Abrir menu de navegacion</span>
      <Menu />
    </button>
    <aside id="sidebar-multi-level-sidebar" className={`md:fixed absolute top-0 sm:left-0 ${visibleComponent ? `left-64` : `left-[-200px]`} z-40 w-64 h-screen  -translate-x-full sm:translate-x-0 ease-in shadow-md transition-all`} aria-label="Sidebar" ref={ref}>
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
        <CatoexpressLogo className="h-[5rem] w-[10rem] mx-auto mb-7" fill="#0e6d2e" />
        <ul className="space-y-2 font-medium">
          {dataOptionsAside.map((option, index) => <li key={option.label + index}>
            {option.label !== "Módulos" && <LinkAside icon={option.icon} name={option.label} href={option.href} />}
            {option.label === "Módulos" && <DropdownAside />}
          </li>)}
        </ul>
      </div>
    </aside>
    {visibleComponent && <div className="w-screen absolute bg-gray-400 h-screen z-10 top-0 opacity-20"></div>}
  </>
}

const dataOptionsAside = [{
  label: "Dashboard",
  href: "/dashboard",
  icon: <LayoutDashboard className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
}, {
  label: "Módulos",
  href: "/dashboard",
  icon: <LayoutDashboard className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
}, {
  label: "Configuración",
  href: "/dashboard",
  icon: <Settings className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
}, {
  label: "Cuenta",
  href: "/dashboard",
  icon: <User className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
}, {
  label: "Usuarios",
  href: "/dashboard",
  icon: <Users className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
}, {
  label: "Cerrar Sesion",
  href: "/",
  icon: <LogOut className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
}]
