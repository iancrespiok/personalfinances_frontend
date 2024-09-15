import { useEffect, useState } from "react";
import useToken from "./useToken";

const useTokenHandler = () => {
  const { token, loading } = useToken();
  const [isValidToken, setIsValidToken] = useState<boolean>(false);

  useEffect(() => {
    if (!loading) {
      const validateToken = async () => {
        const urlBase = process.env.EXPO_PUBLIC_URLBASE;
        const url = urlBase + "categories";

        try {
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
          setIsValidToken(true);
        } catch {
          setIsValidToken(false);
        }
      };
      validateToken();
    }
  }, [loading, token]);
  return {isValidToken};
};

export default useTokenHandler;
