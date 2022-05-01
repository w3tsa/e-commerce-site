// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// local imports
import SignUp from "../../components/sign_up/SignUp";
import SignIn from "../../components/sign_in/SignIn";

// styles
import "./Authentication.scss";

const Authentication = () => {
  // useEffect(() => {
  //   getRedirectResult(auth).then((result) => {
  //     if (result) {
  //       createUserDocumentFromAuth(result.user);
  //     }
  //   });
  // }, []);
  return (
    <div className="authentication-container">
      <SignIn />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignUp />
    </div>
  );
};

export default Authentication;
