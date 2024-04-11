import { ChevronDown, ChevronLeft, ChevronRight, Eye, Filter, Plus, Search, ShoppingCart, SquarePen, Star, Trash2 } from "lucide-react"

import { dataHeaderTable } from "@/data"
import { getProducts } from "@/services"

export const TableProducts = async () => {
  const products = await getProducts('ceprobis-ucsm')
  console.log({ products })

  return <section className="bg-gray-50 p-3 sm:p-5 antialiased">
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
              <label htmlFor="simple-search" className="sr-only">Buscar</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-5 h-5 text-gray-500" />
                </div>
                <input type="text" id="simple-search" placeholder="Buscar producto" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2" />
              </div>
            </form>
          </div>
          <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            <button type="button" id="createProductButton" data-modal-toggle="createProductModal" className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none">
              <Plus className="h-3.5 w-3.5 mr-1.5 -ml-1" />
              Anadir Producto
            </button>
            <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200" type="button">
              <Filter className="h-4 w-4 mr-1.5 -ml-1 text-gray-400" fill="currentColor" />
              Filtrar opciones
              <ChevronDown className="-mr-1 ml-1.5 w-5 h-5" />
            </button>
            <div id="filterDropdown" className="z-10 hidden px-3 pt-1 bg-white rounded-lg shadow w-80 right-0">
              <div className="flex items-center justify-between pt-2">
                <h6 className="text-sm font-medium text-black ">Filtros</h6>
                <div className="flex items-center space-x-3">
                  <a href="#" className="flex items-center text-sm font-medium text-primary-600 hover:underline">Save view</a>
                  <a href="#" className="flex items-center text-sm font-medium text-primary-600 hover:underline">Limpiar todo</a>
                </div>
              </div>
              <div id="accordion-flush" data-accordion="collapse">
                <h2 id="price-heading">
                  <button type="button" className="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 hover:bg-gray-50" data-accordion-target="#price-body" aria-expanded="true" aria-controls="price-body">
                    <span>Precio</span>
                    <ChevronDown className="w-5 h-5 rotate-180 shrink-0" />
                  </button>
                </h2>
                <div id="price-body" className="hidden" aria-labelledby="price-heading">
                  <div className="flex items-center py-2 space-x-3 font-light border-b border-gray-200">
                    <select id="price-from" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " defaultValue={'From'}>
                      <option disabled>de</option>
                      <option defaultValue={500}>$500</option>
                      <option defaultValue={2500}>$2500</option>
                      <option defaultValue={5000}>$5000</option>
                    </select>
                    <select id="price-to" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " defaultValue={'to'}>
                      <option disabled>a</option>
                      <option defaultValue={500}>$500</option>
                      <option defaultValue={2500}>$2500</option>
                      <option defaultValue={5000}>$5000</option>
                    </select>
                  </div>
                </div>
                <h2 id="rating-heading">
                  <button type="button" className="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 hover:bg-gray-50" data-accordion-target="#rating-body" aria-expanded="true" aria-controls="rating-body">
                    <span>Rating</span>
                    <ChevronDown className="w-5 h-5 rotate-180 shrink-0" />
                  </button>
                </h2>
                <div id="rating-body" className="hidden" aria-labelledby="rating-heading">
                  <div className="py-2 space-y-2 font-light border-b border-gray-200">
                    <div className="flex items-center">
                      <input id="five-stars" type="radio" defaultValue="" name="rating" className="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 focus:ring-2" />
                      <label htmlFor="five-stars" className="flex items-center ml-2">
                        <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 focus:ring-2" />
                    <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                  </div>
                </th>
                {dataHeaderTable.map((item, index) => <th scope="col" className="p-4" key={item.name + index}>{item.name}</th>)}
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => <tr className="border-b hover:bg-gray-100" key={product.product + index}>
                <td className="p-4 w-4">
                  <div className="flex items-center">
                    <input id={product.product} type="checkbox" className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 focus:ring-2" />
                    <label htmlFor={product.product} className="sr-only">checkbox</label>
                  </div>
                </td>
                <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">
                  <div className="flex items-center mr-3">
                    <img src={product.image} alt="iMac Front Image" className="h-8 w-auto mr-3" width={500} height={500} />
                    {product.product}
                  </div>
                </th>
                <td className="px-4 py-3">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded">Console</span>
                </td>
                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded-full inline-block mr-2 bg-green-400"></div>
                    {product.stock}
                  </div>
                </td>
                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">{product.salesDay}</td>
                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">{product.salesMonth}</td>
                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                    <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                    <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                    <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                    <Star className="w-5 h-5 text-gray-300" fill="currentColor" />
                    <span className="text-gray-500 ml-1">{product.calification}</span>
                  </div>
                </td>
                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">
                  <div className="flex items-center">
                    <ShoppingCart className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" />
                    {product.amountSales}M
                  </div>
                </td>
                <td className="px-4 py-3">${product.revenue}M</td>
                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">
                  <div className="flex items-center space-x-4">
                    <button type="button" data-drawer-target="drawer-update-product" data-drawer-show="drawer-update-product" aria-controls="drawer-update-product" className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
                      <SquarePen className="h-4 w-4 mr-2 -ml-0.5" />
                      Editar
                    </button>
                    <button type="button" data-drawer-target="drawer-read-product-advanced" data-drawer-show="drawer-read-product-advanced" aria-controls="drawer-read-product-advanced" className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
                      <Eye className="w-4 h-4 mr-2 -ml-0.5" />
                      Revisar
                    </button>
                    <button type="button" data-modal-target="delete-modal" data-modal-toggle="delete-modal" className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center">
                      <Trash2 className="h-4 w-4 mr-2 -ml-0.5" />
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>)}
            </tbody>
          </table>
        </div>
        <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
          <span className="text-sm font-normal text-gray-500">
            Mostrando
            <span className="font-semibold text-gray-900 "> 1-10 </span>
            de
            <span className="font-semibold text-gray-900 "> 1000 </span>
          </span>
          <ul className="inline-flex items-stretch -space-x-px">
            <li>
              <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-70">
                <span className="sr-only">Anterior</span>
                <ChevronLeft className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-70">1</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-70">...</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-70">100</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-70">
                <span className="sr-only">Siguiente</span>
                <ChevronRight className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
}
