"use client"

import { useState } from "react"

import Image from "next/image"

export const ProductForm = () => {
  const [image, setImage] = useState<File>()

  return <form action="#" className="flex flex-col max-w-2xl w-full">
    <h5 className="inline-flex items-center mb-6 text-sm md:text-xl font-semibold text-gray-900 uppercase">Actualizar Producto</h5>
    <div className="grid gap-4 mb-4 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nombre del producto</label>
        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Producto" required />
      </div>
      <div>
        <label htmlFor="productPrice" className="block mb-2 text-sm font-medium text-gray-900">Precio</label>
        <input type="number" name="productPrice" id="productPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="S/. 5.00" required />
      </div>
      <div className="grid gap-4 sm:col-span-2 md:gap-6 sm:grid-cols-4">
        <div>
          <label htmlFor="productStock" className="block mb-2 text-sm font-medium text-gray-900">Stock</label>
          <input type="number" name="productStock" id="productStock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="12" required />
        </div>
      </div>
      <div className="sm:col-span-2"><label htmlFor="productDescription" className="block mb-2 text-sm font-medium text-gray-900">Descripción</label><textarea id="productDescription" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Descripción del producto"></textarea></div>
    </div>
    <div className="mb-4">
      <span className="block mb-2 text-sm font-medium text-gray-900">Imagen del producto</span>
      <div className="flex justify-center items-center w-full">
        <label htmlFor="productFile" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100">
          {!image && <div className="flex flex-col justify-center items-center pt-5 pb-6">
            <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Presiona para cargar la imagen </span>
              o arrastra aqui
            </p>
            <p className="text-xs text-gray-500">PNG, JPG o WEPB (MAX. 800x400px)</p>
          </div>}
          {image && <Image src={URL.createObjectURL(image)} alt="" className="h-auto w-full max-h-60 max-w-sm" width={1000} height={1000} />}
          <input id="productFile" name="" type="file" className="hidden" onChange={(e) => setImage(e.target.files?.[0])} />
        </label>
      </div>
    </div>
    <div className="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
      <button type="submit" className="w-full sm:max-w-48 justify-center text-white inline-flex bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Agregar</button>
    </div>
  </form>
}
