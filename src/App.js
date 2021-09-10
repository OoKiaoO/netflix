import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// Routes
import * as ROUTES from './constants/routes';
// Pages
import { Home, Browse, Signin, Signup } from './pages';
// Helpers
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
// Custom Hooks
import { useAuthListener } from './hooks';

function App() {
  const { user } = useAuthListener();

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
// adding comment for commit
export default App;
