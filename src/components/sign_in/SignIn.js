import { useState } from "react";

// local import
import FormInput from "../form_input/FormInput";
import Button from "../button/Button";
import CustomAlert from "../custom_alert/CustomAlert";
import {
  createAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

// styles
import "./SignIn.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errorMessage, setErrorMessage] = useState("");
  const { email, password } = formFields;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      setFormFields(defaultFormFields);
      setErrorMessage("");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          setErrorMessage("Incorrect password or email");
          break;
        case "auth/user-not-found":
          setErrorMessage("No user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-up-container">
      {errorMessage && <CustomAlert errorMessage={errorMessage} />}
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />
        <FormInput
          label={"Password"}
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
