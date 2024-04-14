"use client"

import { SquarePen, X } from "lucide-react"

import { useVisibleComponent } from "@/hooks"
import { ProductForm } from "../form"

export const UpdateProductDrawer = ({ product }: { product: IProduct }) => {
  const { ref, setVisibleComponent, visibleComponent } = useVisibleComponent(false, true)
  console.log({ visblecomponentUpdate: visibleComponent })
  console.log({ product })
  return <>
    <button type="button" className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300" onClick={() => setVisibleComponent(!visibleComponent)}>
      <SquarePen className="h-4 w-4 mr-2 -ml-0.5" />
      Editar
    </button>

    <div className={`w-screen h-screen fixed top-0 z-30 ${!visibleComponent && 'left-[-800rem]'} ${visibleComponent && '-left-3'} transition-all duration-200`}>
      <div className={`fixed h-screen max-w-xs md:max-w-2xl w-full p-4 overflow-y-auto bg-white z-40 `} ref={ref}>
        <div className="flex flex-col">
          <button
            type="button"
            className="bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 self-end inline-flex justify-center items-center"
            data-modal-hide="authentication-modal"
            onClick={() => setVisibleComponent(false)}
          >
            <X className="w-6 h-6" />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <ProductForm />
      </div>
      <span className={` w-screen h-screen absolute bg-[#D9D9D9] opacity-60 z-30 block`} onClick={() => setVisibleComponent(false)}></span>
    </div>
  </>
}
