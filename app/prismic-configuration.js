import * as prismic from "@prismicio/client";

const apiUrl = process.env.NEXT_PUBLIC_PRISMIC_URL;
const apiToken = process.env.NEXT_PUBLIC_PRISMIC_TOKEN;

export const client = prismic.createClient(apiUrl, {
  accessToken: apiToken,
});
