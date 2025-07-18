import React, { createContext } from 'react';

// Create the context
export const AuthDataContext = createContext();

// Context provider component
function AuthContext({ children }) {
  const serverUrl = 'http://localhost:8000';

  const value = {
    serverUrl,
  };

  return (
    <AuthDataContext.Provider value={value}>
      {children}
    </AuthDataContext.Provider>
  );
}

export default AuthContext;
