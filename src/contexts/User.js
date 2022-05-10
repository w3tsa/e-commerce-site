import { createContext, useState } from "react";

//  as the actual value you want to access
const UserContext = createContext({
  currentUser: null,
  seCurrentUser: () => null,
});

const UserProvider = ({ children }) => {
  const [currentUser, seCurrentUser] = useState(null);
  const value = { currentUser, seCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
