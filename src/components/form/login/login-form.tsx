"use client"

import { useFormState } from "react-dom"

import { loginFormAction } from "@/actions"
import { ButtonSubmit, InputFloat } from "@/components/ui"

const initialState = {}

export const LoginForm = () => {
  const [state, formAction] = useFormState(loginFormAction, initialState)

  console.log({ state })

  return <form action={formAction} className="flex flex-col gap-5" name="Formulario inicio de sesion">
    <div id="loginForm-header">
      <h4 className="font-semibold text-lg text-center">Iniciar Sesion</h4>
    </div>
    <div id="loginForm-main" className="flex flex-col gap-5">
      <InputFloat label="Usuario" type="text" id="userName" name="userName" />
      <InputFloat label="Contrasena" type="password" id="userPassword" name="userPassword" />
    </div>
    <div id="loginForm-footer" className="grid">
      <ButtonSubmit content="Ingresar" className="justify-self-end" />
    </div>
  </form>
}
