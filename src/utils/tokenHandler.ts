import { getService, getToken } from "./getService"

export const  isValidToken = async (): Promise<boolean> => {


      // Obtener el token
  const urlBase = "http://localhost:8080/";
  const url = urlBase + 'categories';
  const token = await getToken();
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Agrega el token Bearer aquí
        "Content-Type": "application/json", // Puedes agregar otros headers si es necesario
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);

    return true
  } catch (error) {
    console.log("Error:", error);
    return false
  }
  }