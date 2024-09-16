import { useContext, useDebugValue } from "react";
import { AuthContext } from "../context/AuthContext";
import getToken from "./getToken";


// useAuthService.ts

export const useAuthService = () => {
  const { storeToken, setIsAuthenticated } = useContext(AuthContext);

  const postAuthService = async (body: any, endpoint: string) => {
    const baseUrl = process.env.EXPO_PUBLIC_URLBASE;
    const url = baseUrl + endpoint;
    try {
      const response = await axios.post(url, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const token = response.data.jwt;
   
      if (token) {
        await storeToken(token);
        setIsAuthenticated(true);
      }

      return response.data;
    } catch (error) {
      console.error('Error posting to auth service:', error);
      throw error; // Puedes manejar el error como consideres necesario
    }
  };


  return { postAuthService };
};

import axios from "axios";

export const postService = async (body: any, endpoint: string) => {
  const baseUrl = process.env.EXPO_PUBLIC_URLBASE;
  const url = baseUrl + endpoint;
  const token = await getToken();
  console.log(token, 'soy token')
  try {
    const response = await axios.post(url, body, {
      method: "POST",
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
