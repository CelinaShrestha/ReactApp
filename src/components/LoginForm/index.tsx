import React, { useState } from "react";
import Button from "../Button";
import InputField from "../InputField";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

type LoginProps = {
  email: string;
  password: string;
};

const users = [
  { email: "celinasth@gmail.com", password: "12345678" },
  { email: "celsth@gmail.com", password: "CScelina@7" },
];

const LoginForm = () => {
  const [values, setValues] = useState<LoginProps>({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [EmailMessage, setEmailMessage] = useState("");
  const [PasswordMessage, setPasswordMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(values);

    // const emailRegex = /^[a-z\d+.-]+@([a-z\d-]+\.)+[a-z]{2,8}(\.[a-z]{2,8})?$/i;
    // if (!emailRegex.test(values.email)) {
    //   setError(true);
    //   setEmailMessage("Error! You have entered an invalid email.");
    // } else {
    //   setError(false);
    //   setEmailMessage("");
    // }

    // const passwordRegex =
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    // if (!passwordRegex.test(values.password)) {
    //   setError(true);
    //   setPasswordMessage(
    //     "Error! Password must contain at least 8 characters, including uppercase, lowercase letters, numbers, and special characters."
    //   );
    // } else {
    //   setError(false);
    //   setPasswordMessage("");
    // }
  };

  return (
    <div className="login-component">
      <div className="Heading">
        <h1>Welcome Back</h1>
        <p>
          Today is a new day. It's your day. You shape it. Sign in to start
          managing your projects.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Email Address"
          placeholder="example@gmail.com"
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
          errorMessage={EmailMessage}
          required
          error={error}
        />
        <InputField
          label="Password"
          placeholder="At least 8 characters"
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password}
          errorMessage={PasswordMessage}
          required
          error={error}
        />
        <div className="mb-3 text-end">
          <a href="#">Forgot Password?</a>
        </div>

        <Button text="Sign in" className="primary-button" />
      </form>
      <div className="hr-text mt-3">
        {/* <span>OR</span> */}
        <hr />
      </div>
      <div className="my-3">
        <Button
          text="Sign in with Google"
          className="secondary-button mb-3"
          icon={<FcGoogle size={24} />}
        />
        <Button
          text="Sign in with Facebook"
          className="secondary-button"
          icon={<FaFacebook size={24} />}
        />
      </div>

      <div className="mt-5 text-center">
        Don't have an account? <a href="#">Sign Up</a>
      </div>
    </div>
  );
};

export default LoginForm;
