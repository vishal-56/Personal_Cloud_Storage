import { useContext, useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import { Alert } from "../components/Alert";

AlertProvider.propTypes = {
  children: PropTypes.node,
};

const AlertContext = createContext();

export function useAlert() {
  return useContext(AlertContext);
}

export function AlertProvider({ children }) {
  const [alert, setAlert] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (alert) {
      setTimeoutId(
        setTimeout(() => {
          setAlert(null);
        }, 2000),
      );
    }
  }, [alert]);

  function showAlert(className, message) {
    setAlert({ className: className, message: message });
  }

  const value = {
    showAlert,
  };

  return (
    <AlertContext.Provider value={value}>
      {alert && <Alert alert={alert} />}
      {children}
    </AlertContext.Provider>
  );
}
// Commit on 2024-01-16T10:45:00
// Commit on 2024-02-22T16:24:00
// Commit on 2024-03-30T17:31:00
// Commit on 2024-05-06T12:15:00
// Commit on 2024-06-12T10:27:00
// Commit on 2024-07-19T11:20:00
// Commit on 2024-08-25T11:33:00
// Commit on 2024-10-01T10:34:00
// Commit on 2024-11-07T15:57:00
// Commit on 2024-12-14T11:14:00
