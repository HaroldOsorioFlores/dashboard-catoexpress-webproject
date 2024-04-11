if (!process.env.BASE_URL_API) {
  throw new Error("Base URL not found");
}

export const API_URL = process.env.BASE_URL_API;
