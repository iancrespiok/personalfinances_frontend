import useToken from "../hooks/useToken";
import axios from "axios";


export const postService = async (body: any, endpoint: string) => {
  const baseUrl = process.env.EXPO_PUBLIC_URLBASE;
  const url = baseUrl + endpoint;
  const {token} = useToken();
  
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