import { ENV } from "@/config/env";

export const getLastPublishedGame = async () => {
  try {
    const sort = "sort=publishedAt:desc";
    const pagination = "pagination[limit]=1";
    const populate = "populate=*";
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${sort}&${pagination}&${populate}`;

    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw error;
  }
};
