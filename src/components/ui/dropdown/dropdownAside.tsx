"use client";

import { ChevronDown, ShoppingCart } from "lucide-react";
import { useState } from "react";

import Link from "next/link";

export const DropdownAside = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  return (
    <>
      <button
        type="button"
        className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
        onClick={() => {
          setDropdown(!dropdown);
        }}
      >
        <ShoppingCart className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
          Módulos
        </span>
        <ChevronDown className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
      </button>
      <ul
        id="dropdown-example"
        className={`${dropdown ? `block` : `hidden`} py-2 space-y-2`}
      >
        {dataModules.map((module, index) => (
          <li key={module.title + index}>
            <Link
              href={module.path}
              className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-sm"
            >
              {module.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const dataModules = [
  {
    title: "Ceprobis UCSM",
    path: "/dashboard/module/Ceprobis UCSM",
  },
  {
    title: "Panificadora UCSM",
    path: "/dashboard/module/Panificadora UCSM",
  },
  {
    title: "El Cholo",
    path: "/dashboard/module/El Cholo",
  },
];
