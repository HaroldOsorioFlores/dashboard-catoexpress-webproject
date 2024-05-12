"use client";

import { ChevronDown, Filter, Star } from "lucide-react";
import { useState } from "react";

import { StyledButton } from "../buttons";
import { useVisibleComponent } from "@/hooks";

export const FilterTableDropdown = () => {
  const { ref, setVisibleComponent, visibleComponent } = useVisibleComponent(
    false,
    false
  );
  const [accordionPrice, setAccordionPrice] = useState(false);
  const [accordionRating, setAccordionRating] = useState(false);

  return (
    <>
      <StyledButton
        option="secondary"
        icon={{
          element: (
            <Filter className="h-4 w-4 text-gray-400" fill="currentColor" />
          ),
          direction: "left",
        }}
        className="text-gray-600 hover:text-primary-700 group"
        onClick={() => setVisibleComponent(!visibleComponent)}
      >
        Filtrar opciones
        <ChevronDown className="w-5 h-5" />
      </StyledButton>
      <div
        id="filterDropdown"
        ref={ref}
        className={`z-10 ${
          visibleComponent ? "block" : "hidden"
        } px-3 pt-1 bg-white rounded-lg shadow top-52 md:top-32 absolute sm:w-80 w-60`}
      >
        <div className="flex items-center pt-2 gap-6 md:gap-3 md:justify-between">
          <h6 className="text-sm font-medium text-black ">Filtros</h6>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex items-center text-sm font-medium text-primary-600 hover:underline"
            >
              Guardar Cambios
            </a>
            <a
              href="#"
              className="flex items-center text-sm font-medium text-primary-600 hover:underline"
            >
              Limpiar todo
            </a>
          </div>
        </div>
        <div id="accordion-flush" data-accordion="collapse">
          <h2 id="price-heading">
            <button
              type="button"
              className="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 hover:bg-gray-50"
              onClick={() => setAccordionPrice(!accordionPrice)}
            >
              <span>Precio</span>
              <ChevronDown className="w-5 h-5 rotate-180 shrink-0" />
            </button>
          </h2>
          <div
            id="price-body"
            className={`${accordionPrice ? "block" : "hidden"}`}
          >
            <div className="flex items-center py-2 space-x-3 font-light border-b border-gray-200">
              <select
                id="price-from"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                defaultValue={"From"}
              >
                <option disabled>de</option>
                <option defaultValue={500}>S/.500</option>
                <option defaultValue={2500}>S/.2500</option>
                <option defaultValue={5000}>S/.5000</option>
              </select>
              <select
                id="price-to"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                defaultValue={"to"}
              >
                <option disabled>a</option>
                <option defaultValue={500}>S/.500</option>
                <option defaultValue={2500}>S/.2500</option>
                <option defaultValue={5000}>S/.5000</option>
              </select>
            </div>
          </div>
          <h2 id="rating-heading">
            <button
              type="button"
              className="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 hover:bg-gray-50"
              onClick={() => setAccordionRating(!accordionRating)}
            >
              <span>Rating</span>
              <ChevronDown className="w-5 h-5 rotate-180 shrink-0" />
            </button>
          </h2>
          <div
            id="rating-body"
            className={`${accordionRating ? "block" : "hidden"}`}
          >
            <div className="py-2 space-y-2 font-light border-b border-gray-200">
              <div className="flex items-center">
                <input
                  id="five-stars"
                  type="radio"
                  defaultValue=""
                  name="rating"
                  className="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 focus:ring-2"
                />
                <label htmlFor="five-stars" className="flex items-center ml-2">
                  <Star
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
