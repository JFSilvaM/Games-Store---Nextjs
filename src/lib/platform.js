import { ENV } from "@/config/env";

export const getAllPlatforms = async () => {
  try {
    const sort = "sort=order:asc";
    const populate = "populate=icon";
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PLATFORM}?${populate}&${sort}`;

    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getPlatformBySlug = async (slug) => {
  try {
    const filters = `filters[slug][$eq]=${slug}`;
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PLATFORM}?${filters}`;
    const params = { cache: "no-store" };

    const response = await fetch(url, params);
    return await response.json();
  } catch (error) {
    throw error;
  }
};
