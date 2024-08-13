import LoginForm from "../components/LoginForm";
import background_image from "../assets/background-image.jpg";

const Login = () => {
  return (
    <div className="container mx-auto">
      <div className="row justify-content-around align-items-center p-5">
        <div className="col-4 d-flex flex-column align-items-center ">
          <LoginForm />
        </div>
        <div className="col-8 image">
          <img src={background_image} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
