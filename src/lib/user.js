import { ENV } from "@/config/env";

export const getUser = async () => {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;
    const params = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzEsImlhdCI6MTc3MTg0NTg3OSwiZXhwIjoxNzc0NDM3ODc5fQ.HP--ZAevvzyG9t2kYiLeDhqU418Ir4FeEN49dbHC4fA",
      },
    };

    const response = await fetch(url, params);
    return await response.json();
  } catch (error) {
    throw error;
  }
};
