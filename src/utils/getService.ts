import AsyncStorage from "@react-native-async-storage/async-storage";

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("userToken");
    return token;
  } catch (error) {
    return false;
  }
};
export const getService = async (endpoint: string) => {
  // Obtener el token
  const urlBase = process.env.EXPO_PUBLIC_URLBASE; 
  const url = urlBase + endpoint;
  const token = await getToken();
  console.log(token, " soy el tokcen");
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
  } catch (error) {
    console.log("Error:", error);
  }
};
