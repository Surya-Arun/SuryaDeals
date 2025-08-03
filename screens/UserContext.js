import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // [{ username, password }]
  const [currentUser, setCurrentUser] = useState(null);

  const register = (name,email,password) => {
    const userExists = users.some((u) => u.email === email);
    if (userExists) return false;
    setUsers([...users, { name,email, password }]);
    return true;
  };

  const login = (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  return (
    <UserContext.Provider value={{ users, currentUser, register, login }}>
      {children}
    </UserContext.Provider>
  );
};
