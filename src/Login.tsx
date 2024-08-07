import Button from "./components/Button";
import InputField from "./components/InputField";

function Login() {
  return (
    <div>
      <div className="Heading">
        <h1>Welcome Back</h1>
        <p>
          Today is a new day. It's your day. You shape it. Sign in to start
          managing your projects.
        </p>
      </div>

      <form action="">
        <InputField />
        <Button text="Sign in" />
      </form>
    </div>
  );
}

export default Login;
