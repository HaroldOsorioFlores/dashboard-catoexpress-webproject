import { API_URL } from "./base.api";

export async function getUsers(endpoint: string): Promise<IUser[]> {
  try {
    const data = await fetch(`${API_URL}/${endpoint}`, {
      next: { tags: ["users"] },
    });
    return data.json();
  } catch (error) {
    throw new Error("Ocurrio algo");
  }
}
