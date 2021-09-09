import React, { useState, useContext } from 'react';
// Routing to different pages on an action result (Ex. signin/signup promise response)
import { useHistory } from 'react-router-dom';
// Context
import { FirebaseContext } from '../context/firebase';
// Containers
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
// Components
import { Form } from '../components';
// Routes
import * as ROUTES from '../constants/routes';

function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // check form input elements are valid (email & password)
  const isInvalid = password === '' || emailAddress === '';

  const handleSignin = (event) => {
    event.preventDefault();
    // firebase magic here~
    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        // if signin OK push to browse page
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        // in case of error reset input fields
        setEmailAddress('');
        setPassword('');
        setError(error.message); // message return from Firebase
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit data-testid="sign-in" disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
            <Form.Text>
              New to Nefltix? <Form.Link to="/signup">Sign up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export default Signin;
