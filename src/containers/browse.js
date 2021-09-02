import React, { useContext, useState, useEffect } from 'react';
import SelectProfileContainer from './profile';
import { FirebaseContext } from '../context/firebase';

export default function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({}); // setting as empty obj as we are expecting to pass in the user
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    console.log('profile', profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return <SelectProfileContainer user={user} setProfile={setProfile} />;
}
