"use server";

let token: string | null = null;

const clientId = process.env.CLIENT_ID!;
const clientSecret = process.env.CLIENT_SECRET!;
const API_URL = process.env.API_URL! + "/login";

const getNewToken = async (): Promise<void> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération du token");
  }

  const data = await response.json();
  token = data.token;
};

/**
 * TODO: Créer un système de persistance du token
 * pour éviter de le renouveler à chaque requête
 */
const getValidToken = async (): Promise<string> => {
  if (!token) {
    await getNewToken();
  }
  return token!;
};

export const fetchJobs = async (
  url: string,
  options: RequestInit = {}
): Promise<any> => {
  const validToken = await getValidToken();
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${validToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Erreur lors de la requête vers ${url}`);
  }

  return response.json();
};
