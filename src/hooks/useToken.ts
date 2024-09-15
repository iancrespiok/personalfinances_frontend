/**
 *
 * @returns token es el token de la sesion del usuario
 * @returns error es el error al intentar obtener el token
 * @example const{token,error} = useToken();
 *
 */

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

const useToken = () => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    try {
      setLoading(true);
      const storedToken = await AsyncStorage.getItem("userToken");
      setToken(storedToken ? JSON.parse(storedToken) : null);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { token, loading, error };
};

export default useToken;
