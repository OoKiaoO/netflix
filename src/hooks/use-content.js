import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(), // spreading the contents of the obj
          docId: contentObj.id, // exctracting the docId to be used as key
        }));

        setContent(allContent);
      })
      .catch((error) => {
        console.lof(error.message);
      });
  }, [firebase, target]);

  return { [target]: content };
}
