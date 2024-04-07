"use server"

import { redirect } from "next/navigation";

export async function loginFormAction(prevState: any, formData: FormData) {
  let dataDefined = {};
  try {
    dataDefined = {
      userName: formData.get("userName"),
      userPassword: formData.get("userPassword"),
    };
    console.log({ dataDefined });
  } catch (error) {}

  if (dataDefined) {
    console.log({ dataDefined });
    redirect("/dashboard");
  }

  return {
    msg: "",
  };
}
