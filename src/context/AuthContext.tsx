// AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { isValidToken } from '../utils/tokenHandler';
import AsyncStorage from '@react-native-async-storage/async-storage';



type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: (auth: boolean) => void;
  loaderStatus: boolean
  storeToken:(token: any) => Promise<void>
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  loaderStatus: false,
  storeToken: async (token) => {}
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loaderStatus, setLoaderStatus] = useState<boolean>(false);

  // Guardar el token
  const storeToken = async (token: any): Promise<void> => {
    try {
      await AsyncStorage.setItem('userToken', token);
      setIsAuthenticated(true)
    } catch (error) {
      console.error('Error guardando el token', error);
    }
  };

  useEffect(() => {
    const checkToken = async () => {
      const valid = await isValidToken();
      setIsAuthenticated(valid);
      setLoaderStatus(true);
    };
    checkToken();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loaderStatus, storeToken }}>
      {children}
    </AuthContext.Provider>
  );
};
