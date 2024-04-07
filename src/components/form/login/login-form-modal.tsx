"use client"

import { ArrowRight } from "lucide-react"

import { useVisibleComponent } from "@/hooks"
import { LoginForm } from "./login-form"
import { Button } from "@/components/ui"
import { Modal } from "@/components/modal"

export const LoginFormModal = () => {
  const { ref, setVisibleComponent, visibleComponent } = useVisibleComponent(false, true)
  return <>
    <Button
      onClick={() => setVisibleComponent(!visibleComponent)}
      content="Iniciar"
      icon={<ArrowRight className="w-5 md:w-6" />}
    />
    <Modal isComponentVisible={visibleComponent} setIsComponentVisible={setVisibleComponent} ref={ref}>
      <LoginForm />
    </Modal>
  </>
}
