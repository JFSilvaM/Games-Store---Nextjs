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

export const getLatestPublishedGames = async (limit = 9, platformId = null) => {
  try {
    const platform = platformId && `filters[platform][id][$eq]=${platformId}`;
    const sort = "sort[0]=publishedAt:desc";
    const pagination = `pagination[limit]=${limit}`;
    const populate = "populate=*";
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${sort}&${pagination}&${platform}&${populate}`;

    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getGamesByPlatformSlug = async (slug, page) => {
  try {
    const filters = `filters[platform][slug][$eq]=${slug}`;
    const pagination = `pagination[page]=${page}&pagination[pageSize]=3`;
    const populate = "populate=*";
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${filters}&${pagination}&${populate}`;

    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const searchGames = async (text, page) => {
  try {
    const filters = `filters[title][$contains]=${text}`;
    const pagination = `pagination[page]=${page}&pagination[pageSize]=3`;
    const populate = "populate=*";
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${filters}&${pagination}&${populate}`;

    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw error;
  }
};
