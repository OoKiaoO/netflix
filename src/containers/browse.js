/* eslint-disable no-nested-ternary */
import React, { useContext, useState, useEffect } from 'react';
import SelectProfileContainer from './profile';
import { FirebaseContext } from '../context/firebase';
import { Loading, Header } from '../components';

export default function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({}); // setting as empty obj as we are expecting to pass in the user
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src="joker1">
        <p>Hello</p>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
