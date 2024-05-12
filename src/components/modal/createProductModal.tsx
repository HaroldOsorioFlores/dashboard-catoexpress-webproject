"use client";

import { Plus } from "lucide-react";

import { useVisibleComponent } from "@/hooks";
import { Modal } from "./modal";
import { ProductForm } from "../form";
import { StyledButton } from "../ui";

export const CreateProductModal = () => {
  const { ref, setVisibleComponent, visibleComponent } = useVisibleComponent(
    false,
    true
  );

  return (
    <>
      <StyledButton
        type="button"
        id="createProductButton"
        option="primary"
        className="px-4 py-2 md:text-sm"
        icon={{
          direction: "left",
          element: <Plus className="h-3.5 w-3.5" />,
        }}
        onClick={() => setVisibleComponent(!visibleComponent)}
      >
        Anadir Producto
      </StyledButton>
      <Modal
        isComponentVisible={visibleComponent}
        setIsComponentVisible={setVisibleComponent}
        ref={ref}
        className={{
          classNameContainer:
            "overflow-y-auto w-full md:max-w-[50rem] md:inset-0 z-50 md:m-10 m-6",
        }}
      >
        <ProductForm
          tableOptions={{ title: "Anadir producto", btnSubmit: "Agregar" }}
        />
      </Modal>
    </>
  );
};
