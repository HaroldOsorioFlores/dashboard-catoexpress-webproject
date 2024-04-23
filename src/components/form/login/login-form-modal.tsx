"use client";

import { ArrowRight } from "lucide-react";

import { useVisibleComponent } from "@/hooks";
import { LoginForm } from "./login-form";
import { Button, StyledButton } from "@/components/ui";
import { Modal } from "@/components/modal";

export const LoginFormModal = () => {
  const { ref, setVisibleComponent, visibleComponent } = useVisibleComponent(
    false,
    true
  );
  return (
    <>
      <StyledButton
        option="primary"
        icon={{
          element: <ArrowRight className="w-5 md:w-6" />,
          direction: "right",
        }}
        onClick={() => setVisibleComponent(!visibleComponent)}
        className="self-start"
      >
        Iniciar
      </StyledButton>
      <Modal
        isComponentVisible={visibleComponent}
        setIsComponentVisible={setVisibleComponent}
        ref={ref}
      >
        <LoginForm />
      </Modal>
    </>
  );
};
