import { createContext, useEffect, useState } from 'react';
import { getUser, signInRequest } from '../services/auth';
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';
import { api } from '../services/api';

type SignInData = {
  email: string;
  password: string;
}

type User = {
  name: string;
  email: string;
  avatar_url: string;
}

type AuthContextType = {
  user: User | null
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'todorial.token': token } = parseCookies();

    if(token){
      getUser().then(res => setUser(res.user));
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    const { token, user } = await signInRequest({ email, password });

    setCookie(undefined, 'todorial.token', token, {
      maxAge: 60 * 60 * 1 // 1h
    });

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setUser(user);

    Router.push('/main');
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}