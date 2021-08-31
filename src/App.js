import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Routes
import * as ROUTES from './constants/routes';
// Pages
import { Home, Browse, Signin, Signup } from './pages';
// Helpers
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

function App() {
  const user = {};
  return (
    <Router>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact>
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} exact>
        <Signup />
      </IsUserRedirect>
      <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact>
        <Home />
      </IsUserRedirect>
    </Router>
  );
}

export default App;
