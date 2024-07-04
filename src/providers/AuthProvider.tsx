import {
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import React, { useEffect, useState } from "react";

interface IAuthContext {
  user: User | null;
  onSignIn: (redirect: () => void) => void;
  onSignOut: () => void;
}

const AuthContext = React.createContext<IAuthContext>(null!);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const provider = new FacebookAuthProvider();
  const auth = getAuth();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const onSignIn = (redirect: () => void) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.
        redirect();

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
      .then(() => {
        setUser(null);
        sessionStorage.removeItem("accessToken");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const value = {
    user,
    onSignIn,
    onSignOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext);

export default AuthProvider;
