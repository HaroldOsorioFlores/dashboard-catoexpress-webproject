import {
  ChevronLeft,
  ChevronRight,
  Search,
  ShoppingCart,
  Star,
  Trash2,
} from "lucide-react";
import { revalidateTag } from "next/cache";

import { dataHeaderTable } from "@/data";
import { getProducts } from "@/services";
import { CreateProductModal } from "../modal";
import { ReviewProductDrawer, UpdateProductDrawer } from "../drawer";
import { FilterTableDropdown } from "../ui";

export const TableProducts = async () => {
  const products = await getProducts("ceprobis-ucsm");
  revalidateTag("products");

  return (
    <section className="bg-gray-50 p-3 sm:p-5 antialiased">
      <div className="mx-auto max-w-screen-2xl px-4 ">
        <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="flex-1 flex items-center space-x-2">
              <h5>
                <span className="text-gray-500">Todos los productos: </span>
                <span className="">123456</span>
              </h5>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 border-t">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Buscar
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="w-5 h-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    placeholder="Buscar producto"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2"
                  />
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <CreateProductModal />
              <FilterTableDropdown />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  {dataHeaderTable.map((item, index) => (
                    <th scope="col" className="p-4" key={item.name + index}>
                      {item.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr
                    className="border-b hover:bg-gray-100"
                    key={product.product + index}
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap "
                    >
                      <div className="flex items-center mr-3">
                        <img
                          src={product.image}
                          alt="iMac Front Image"
                          className="h-8 w-auto mr-3"
                          width={500}
                          height={500}
                        />
                        {product.product}
                      </div>
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">
                      <div className="flex items-center">
                        <div className="h-4 w-4 rounded-full inline-block mr-2 bg-green-400"></div>
                        {product.stock}
                      </div>
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">
                      {product.salesDay}
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">
                      {product.salesMonth}
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">
                      <div className="flex items-center">
                        <Star
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                        />
                        <Star
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                        />
                        <Star
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                        />
                        <Star
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                        />
                        <Star
                          className="w-5 h-5 text-gray-300"
                          fill="currentColor"
                        />
                        <span className="text-gray-500 ml-1">
                          {product.calification}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">
                      <div className="flex items-center">
                        <ShoppingCart
                          className="w-5 h-5 text-gray-400 mr-2"
                          fill="currentColor"
                        />
                        {product.amountSales}M
                      </div>
                    </td>
                    <td className="px-4 py-3">${product.revenue}M</td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">
                      <div className="flex items-center space-x-4">
                        <UpdateProductDrawer product={{ ...product }} />
                        <ReviewProductDrawer product={{ ...product }} />
                        <button
                          type="button"
                          className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-3 py-2 text-center"
                        >
                          <Trash2 className="h-4 w-4 mr-2 -ml-0.5" />
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <nav
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500">
              Mostrando
              <span className="font-semibold text-gray-900 "> 1-10 </span>
              de
              <span className="font-semibold text-gray-900 "> 1000 </span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-70"
                >
                  <span className="sr-only">Anterior</span>
                  <ChevronLeft className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-70"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-70"
                >
                  ...
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-70"
                >
                  100
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-70"
                >
                  <span className="sr-only">Siguiente</span>
                  <ChevronRight className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
