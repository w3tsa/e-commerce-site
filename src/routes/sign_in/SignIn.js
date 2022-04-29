// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// local imports
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase";

import SignUp from "../../components/sign_up/SignUp";

const SignIn = () => {
  // useEffect(() => {
  //   getRedirectResult(auth).then((result) => {
  //     if (result) {
  //       createUserDocumentFromAuth(result.user);
  //     }
  //   });
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignUp />
    </div>
  );
};

export default SignIn;
