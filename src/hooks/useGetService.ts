import { useState, useEffect } from "react";
import useToken from "./useToken";

const useGetService = (endpoint: string) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getService();
  }, [endpoint]);

  const getService = async () => {
    try {
      setLoading(true);
      const { token, loading, error } = useToken();
      if (error) {
        setError(true);
      }
      const urlBase = process.env.EXPO_PUBLIC_URLBASE;
      const url = urlBase + endpoint;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error };
};

export default useGetService;
