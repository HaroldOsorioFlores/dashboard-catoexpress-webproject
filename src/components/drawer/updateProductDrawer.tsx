"use client";

import { SquarePen } from "lucide-react";

import { ProductForm } from "../form";
import { StyledButton } from "../ui";
import { Drawer } from "./drawer";
import { useVisibleComponent } from "@/hooks";

export const UpdateProductDrawer = ({ product }: { product: IProduct }) => {
  const { ref, setVisibleComponent, visibleComponent } = useVisibleComponent(
    false,
    true
  );
  return (
    <>
      <StyledButton
        option="primary"
        type="button"
        onClick={() => setVisibleComponent(!visibleComponent)}
        className="py-2 px-3 md:text-sm"
        icon={{
          element: <SquarePen className="h-4 w-4 mr-2 -ml-0.5" />,
          direction: "left",
        }}
      >
        Editar
      </StyledButton>

      <Drawer
        setVisibleComponent={setVisibleComponent}
        visibleComponent={visibleComponent}
        ref={ref}
      >
        <ProductForm
          product={product}
          tableOptions={{
            title: "Actualizar Producto",
            btnSubmit: "Actualizar",
          }}
        />
      </Drawer>
    </>
  );
};
