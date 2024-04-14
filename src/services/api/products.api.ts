import next from "next";
import { API_URL } from "./base.api";

export async function getProducts(endpointModule: string): Promise<IProduct[]> {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers: headers,
    next: {
      tags: ['products']
    }
  };

  try {
    const data = await fetch(`${API_URL}/${endpointModule}`, requestOptions);
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error("Ocurrio algo inesperado");
  }
}
