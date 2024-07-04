import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  User,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import React, { useEffect, useState } from "react";
import { firebaseConfig } from "../../firebase";

const Auth = () => {
  const provider = new FacebookAuthProvider();
  const auth = getAuth();

  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    initializeApp(firebaseConfig);
    auth.onAuthStateChanged((user) => {
      setUser(user)
    });
  }, []);

  const onSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log(error);
        // ...
      });
  };

  const onSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return user ? (
    <>
      <h1>Hello {user.displayName}</h1>
      <button onClick={onSignOut}>Logout</button>
    </>
  ) : (
    <button onClick={onSignIn}>Login</button>
  );
};

export default Auth;
