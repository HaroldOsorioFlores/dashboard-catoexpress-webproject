import { redirect } from "next/navigation";

export function loginFormAction(prevState: any, formData: FormData) {
  let dataDefined = {};
  try {
    dataDefined = {
      userName: formData.get("userName"),
      userPassword: formData.get("userPassword"),
    };
  } catch (error) {}

  if (dataDefined) redirect("/dashboard");

  return {
    msg: "",
  };
}
