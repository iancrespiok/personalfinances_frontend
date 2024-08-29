import { getToken } from "./getService";

/**
 *
 * @param body Require to add to the request
 * @param endpoint url
 */
export const postAuthService = async (body: any, endpoint: string) => {
  const baseUrl = "http://localhost:8080/";
  const url = baseUrl + endpoint;

  try {
    const response = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

import axios from "axios";

export const postService = async (body: any, endpoint: string) => {
  const baseUrl = "http://localhost:8080/";
  const url = baseUrl + endpoint;
  const token = await getToken();

  try {
    const response = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
