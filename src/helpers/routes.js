import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// function to check if user is signed in, and if so to redirect him to browse page
export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) {
          // in this case children will be a page like signin or signup
          return children;
        }
        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null; // in case any of the if statements will work
      }}
    />
  );
}

// function for protected routes to protect the browse page
export function ProtectedRoute({ user, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (user) {
          return children;
        }
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
