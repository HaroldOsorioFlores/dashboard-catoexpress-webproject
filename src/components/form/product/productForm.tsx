"use client"

import { useState } from "react"

import Image from "next/image"

export const ProductForm = ({ product }: { product?: IProduct }) => {
  const [image, setImage] = useState<File>()

  return <form action="#" className="flex flex-col max-w-2xl w-full">
    <h5 className="inline-flex items-center mb-6 text-sm md:text-xl font-semibold text-gray-900 uppercase">Actualizar Producto</h5>
    <div className="grid gap-4 mb-4 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nombre del producto</label>
        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Producto" required defaultValue={product?.product} />
      </div>
      <div>
        <label htmlFor="productPrice" className="block mb-2 text-sm font-medium text-gray-900">Precio</label>
        <input type="number" name="productPrice" id="productPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="S/. 5.00" required />
      </div>
      <div className="grid gap-4 sm:col-span-2 md:gap-6 sm:grid-cols-4">
        <div>
          <label htmlFor="productStock" className="block mb-2 text-sm font-medium text-gray-900">Stock</label>
          <input type="number" name="productStock" id="productStock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="12" required defaultValue={product?.stock} />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="productDescription" className="block mb-2 text-sm font-medium text-gray-900">Descripción</label>
        <textarea id="productDescription" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Descripción del producto" />
      </div>
    </div>
    <div className="mb-4">
      <span className="block mb-2 text-sm font-medium text-gray-900">Imagen del producto</span>
      <div className="flex justify-center items-center w-full">
        <label htmlFor="productFile" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100">
          {image && <Image
            src={URL.createObjectURL(image)}
            alt="Imagen"
            priority
            className="h-auto w-full max-h-60 max-w-sm"
            width={1000} height={1000}
            aria-required
          />}
          {!image && product === undefined && <>
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">
                Click para subir una imagen
              </span>
              o desplaza aqui
            </p>
            <p className="text-xs text-gray-500">
              PNG, JPG o Wepb (MAX. 800x400px)
            </p>
          </>}
          {product && !image && <img
            src={product.image}
            alt="Imagen"
            className="h-auto w-full max-h-60 max-w-sm"
            width={1000} height={1000}
            aria-required
          />}

          <input id="productFile" name="" type="file" className="hidden" onChange={(e) => setImage(e.target.files?.[0])} />
        </label>
      </div>
    </div>
    <div className="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
      <button type="submit" className="w-full sm:max-w-48 justify-center text-white inline-flex bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Agregar</button>
    </div>
  </form>
}
