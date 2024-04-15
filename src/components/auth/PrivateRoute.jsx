import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/home" />
        );
      }}
    ></Route>
  );
}
// Commit on 2024-02-01T10:17:00
// Commit on 2024-03-09T17:36:00
// Commit on 2024-04-15T17:36:00
