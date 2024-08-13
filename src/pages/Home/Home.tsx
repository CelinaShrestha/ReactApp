import Button from "../../components/Button";
import NavBar from "../../components/NavBar";
import { FaPlus } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="home-page">
      <div className="row">
        <div className="col-3 bg-white">
          <NavBar />
        </div>
        <div className="col mt-5 px-5">
          <div className="d-flex justify-content-between">
            <h1>Welcome, Celina</h1>
            <Button text="Add Widget" className="w-25 primary-button" icon={<FaPlus />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
