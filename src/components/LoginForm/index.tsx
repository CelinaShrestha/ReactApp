import React, { useState } from "react";
import Button from "../Button";
import InputField from "../InputField";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Token generation functions
var rand = function () {
  return Math.random().toString(36).substr(2); // remove `0.`
};

var token = function () {
  return rand() + rand(); // to make it longer
};

type LoginProps = {
  email: string;
  password: string;
};

const users = [
  { email: "celinasth@gmail.com", password: "CScelina@1" },
  { email: "celsth@gmail.com", password: "CScelina@2" },
];

const LoginForm = () => {
  const [values, setValues] = useState<LoginProps>({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [EmailMessage, setEmailMessage] = useState("");
  const [PasswordMessage, setPasswordMessage] = useState("");
  const navigate=useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValues({
      ...values,
      [event.target.name]: value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(values);

    let validUser = false;
    let db: any;

    // // Open IndexedDB database
    // const request = window.indexedDB.open("User", 1);

    // request.onerror = (event: any) => {
    //   console.error("Failed to open IndexedDB:", event.target.errorCode);
    // };

    // request.onsuccess = (event: any) => {
    //   db = event.target.result;

    users.forEach((user) => {
      if (user.email === values.email && user.password === values.password) {
        validUser = true;
        console.log("Login successful");
        const jwtToken = token();

        document.cookie = `jwtToken=${jwtToken}; path=/;`;

        // const transaction = db.transaction(["tokens"], "readwrite");
        // const objectStore = transaction.objectStore("tokens");

        // const addRequest = objectStore.add({ token: jwtToken });

        // addRequest.onsuccess = () => {
        //   console.log("Token saved in IndexedDB");
        // };

        // addRequest.onerror = (event: any) => {
        //   console.error(
        //     "Error saving token in IndexedDB:",
        //     event.target.errorCode
        //   );
        // };
        navigate("/");
      }
    });

    if (!validUser) {
      setError(true);
      setEmailMessage("Invalid email or password");
      setPasswordMessage("Please check your credentials and try again.");
    }

    const emailRegex = /^[a-z\d+.-]+@([a-z\d-]+\.)+[a-z]{2,8}(\.[a-z]{2,8})?$/i;
    if (!emailRegex.test(values.email)) {
      setError(true);
      setEmailMessage("You have entered an invalid email.");
    } else {
      setError(false);
      setEmailMessage("");
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    if (!passwordRegex.test(values.password)) {
      setError(true);
      setPasswordMessage(
        "Password must contain at least 8 characters, including uppercase, lowercase letters, numbers, and special characters."
      );
    } else {
      setError(false);
      setPasswordMessage("");
    }
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
