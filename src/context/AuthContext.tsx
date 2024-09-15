// AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useTokenHandler from '../hooks/useTokenHandler';

type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: (auth: boolean) => void;
  loaderStatus: boolean
  storeToken: (token: any) => Promise<void>
};
export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => { },
  loaderStatus: false,
  storeToken: async (token) => { }
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loaderStatus, setLoaderStatus] = useState<boolean>(true);

  const storeToken = async (token: string): Promise<void> => {
    try {
      await AsyncStorage.setItem('userToken', token);
      setIsAuthenticated(true)
    } catch (error) {
      console.error('Error guardando el token', error);
    }
  };

  useEffect(() => {
    const checkToken = async () => {
      const { isValidToken } = useTokenHandler();
      setLoaderStatus(true);
      setIsAuthenticated(isValidToken);
      setLoaderStatus(false);
    };
    checkToken();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loaderStatus, storeToken }}>
      {children}
    </AuthContext.Provider>
  );
};
