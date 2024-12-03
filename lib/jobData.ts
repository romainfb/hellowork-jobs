"use server";

import { fetchJobs } from "./auth";

export const getJobs = async (page = 1, what = "") => {
  try {
    const url = new URL(process.env.API_URL + "/ads/search");
    url.searchParams.append("limit", "9");
    url.searchParams.append("page", page.toString());

    if (what) url.searchParams.append("what", what);

    const response = await fetchJobs(url.toString());

    return {
      total: response.data?.total || 0,
      ads: response.data?.ads || [],
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des annonces:", error);
    return { total: 0, ads: [] };
  }
};
