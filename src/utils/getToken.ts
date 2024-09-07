import AsyncStorage from "@react-native-async-storage/async-storage";


const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      return token ? JSON.parse(token) : null;
      } catch (error) {
      return false;
    }
  };

  export default getToken;