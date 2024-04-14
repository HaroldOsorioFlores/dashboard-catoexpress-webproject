"use client"

import { Plus, X } from "lucide-react"
import { useState } from "react"

import { useVisibleComponent } from "@/hooks"
import { Modal } from "./modal"
import Image from "next/image"
import { ProductForm } from "../form"

export const CreateProductModal = () => {
  const { ref, setVisibleComponent, visibleComponent } = useVisibleComponent(false, true)
  const [image, setImage] = useState<File>()

  console.log({ image })

  console.log({ visibleComponent })
  return <>
    <button type="button" id="createProductButton" data-modal-toggle="createProductModal" className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none" onClick={() => setVisibleComponent(!visibleComponent)}>
      <Plus className="h-3.5 w-3.5 mr-1.5 -ml-1" />
      Anadir Producto
    </button>
    <Modal isComponentVisible={visibleComponent} setIsComponentVisible={setVisibleComponent} ref={ref} className={{ classNameContainer: 'overflow-y-auto w-full md:max-w-[50rem] md:inset-0 z-50 md:m-10 m-6' }}>
      <ProductForm />
    </Modal>
  </>
}
