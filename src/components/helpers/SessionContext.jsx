import React, { createContext, useState, useEffect } from 'react';
import supabase from '../../../supabase';

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          throw error;
        }
        setSession(data);
      } catch (error) {
        console.error('Error getting session:', error.message);
      }
    };

    getSession();
  }, []);

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};