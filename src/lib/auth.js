import { ENV } from "@/config/env";

export const loginAndRegister = async (urlLoginAndRegister, values) => {
  try {
    const url = `${ENV.API_URL}/${urlLoginAndRegister}`;
    const params = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    const response = await fetch(url, params);
    return await response.json();
  } catch (error) {
    throw error;
  }
};
