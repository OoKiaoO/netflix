import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// Routes
import * as ROUTES from './constants/routes';
// Pages
import { Home, Browse, Signin, Signup } from './pages';
// Helpers
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
// Custom Hooks
import { useAuthListener } from './hooks/use-auth-listener';

function App() {
  const { user } = useAuthListener();
  console.log(user);

  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
