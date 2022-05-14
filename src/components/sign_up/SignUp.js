import { useState } from "react";

// local import
import FormInput from "../form_input/FormInput";
import Button from "../button/Button";
import CustomAlert from "../custom_alert/CustomAlert";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

// styles
import "./SignUp.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errorMessage, setErrorMessage] = useState("");
  const { displayName, email, password, confirmPassword } = formFields;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("passwrod and confirm Password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      setFormFields(defaultFormFields);
      setErrorMessage("");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("Email already exist");
      }
      console.log("user creation encountered an error", error);
    }
  }
  return (
    <div className="sign-up-container">
      {errorMessage && <CustomAlert errorMessage={errorMessage} />}
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />

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

        <FormInput
          label={"Confirm Password"}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
