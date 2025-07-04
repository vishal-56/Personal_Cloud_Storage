import { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../firebase";
import PropTypes from "prop-types";

AuthProvider.propTypes = {
  children: PropTypes.node,
};

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.verifyBeforeUpdateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
// Commit on 2024-01-17T11:42:00
// Commit on 2024-02-23T12:44:00
// Commit on 2024-03-31T17:48:00
// Commit on 2024-05-07T17:56:00
// Commit on 2024-06-13T10:29:00
// Commit on 2024-07-20T16:21:00
// Commit on 2024-08-26T12:11:00
// Commit on 2024-10-02T10:59:00
// Commit on 2024-11-08T13:10:00
// Commit on 2024-12-15T10:31:00
