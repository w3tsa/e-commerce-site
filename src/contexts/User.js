import { createContext, useState, useEffect } from "react";

// local import
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase";

//  as the actual value you want to access
const UserContext = createContext({
  currentUser: null,
  seCurrentUser: () => null,
});

const UserProvider = ({ children }) => {
  const [currentUser, seCurrentUser] = useState(null);
  const value = { currentUser, seCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      seCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
