import Signup from "./pages/auth/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import PrivateRoute from "./components/auth/PrivateRoute";
import ForgotPassword from "./pages/auth/ForgotPassword";
import { AlertProvider } from "./contexts/AlertContext";

function App() {
  return (
    <div className="h-screen" data-theme="fantasy">
      <Router>
        <AlertProvider>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute
                exact
                path="/folder/:folderId"
                component={Dashboard}
              />
              <Route path="/home" component={Home} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </AlertProvider>
      </Router>
    </div>
  );
}

export default App;
// Commit on 2024-01-09T11:30:00
// Commit on 2024-02-15T17:41:00
// Commit on 2024-03-23T13:18:00
// Commit on 2024-04-29T14:38:00
// Commit on 2024-06-05T12:47:00
// Commit on 2024-07-12T14:37:00
// Commit on 2024-08-18T14:25:00
// Commit on 2024-09-24T11:12:00
// Commit on 2024-10-31T10:49:00
// Commit on 2024-12-07T11:47:00
