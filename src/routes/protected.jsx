import { Navigate, Outlet } from "react-router-dom";

function getCookie(name) {
  var re = new RegExp(name + "=([^;]+)");
  var value = re.exec(document.cookie);
  return value != null ? unescape(value[1]) : null;
}

//Call the function
console.log(getCookie("jwtToken"));

const Protected = () => {
  const token = getCookie("jwtToken");

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;
