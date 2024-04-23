"use client";

import { Eye } from "lucide-react";

import { useVisibleComponent } from "@/hooks";
import { Drawer } from "./drawer";
import { StyledButton } from "../ui";

export const ReviewProductDrawer = ({ product }: { product: IProduct }) => {
  const { ref, setVisibleComponent, visibleComponent } = useVisibleComponent(
    false,
    true
  );
  return (
    <>
      <StyledButton
        type="button"
        onClick={() => setVisibleComponent(!visibleComponent)}
        option="secondary"
        icon={{
          element: <Eye className="w-4 h-4 mr-2 -ml-0.5" />,
          direction: "left",
        }}
      >
        Revisar
      </StyledButton>
      <Drawer
        setVisibleComponent={setVisibleComponent}
        visibleComponent={visibleComponent}
        ref={ref}
      >
        <div>
          <h4
            id="read-drawer-label"
            className="mb-1.5 leading-none text-xl font-semibold text-gray-900"
          >
            {product.product}
          </h4>
          <h5 className="mb-5 text-xl font-bold text-gray-900">
            S/.{product.price}
          </h5>
        </div>
        <div className="grid gap-4 mb-4 sm:mb-5">
          <div className="p-2 max-w-96 bg-gray-100 rounded-lg">
            <img src={product.image} alt={`${product.product} Image`} />
          </div>
        </div>
        <dl className="sm:mb-5">
          <dt className="mb-2 font-semibold leading-none text-gray-900">
            Descripcion
          </dt>
          <dd className="mb-4 font-light text-gray-500 sm:mb-5 text-pretty">
            {product.description}
          </dd>
        </dl>
        <dl className="grid grid-cols-2 gap-4 mb-4">
          <div className="col-span-2 p-3 bg-gray-100 rounded-lg border border-gray-200 sm:col-span-1">
            <dt className="mb-2 font-semibold leading-none text-gray-900">
              Ubicacion
            </dt>
            <dd className="flex items-center text-gray-500">
              <svg
                className="w-4 h-4 mr-1.5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Modulo A
            </dd>
          </div>
        </dl>
      </Drawer>
    </>
  );
};
