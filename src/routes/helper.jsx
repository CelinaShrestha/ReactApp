import { redirect } from "react-router-dom";

function getCookie(name) {
  var re = new RegExp(name + "=([^;]+)");
  var value = re.exec(document.cookie);
  return value != null ? unescape(value[1]) : null;
}

export const isAuthenticated = async () => {
  const token = getCookie("jwtToken");
  if (token) throw redirect("/");
  return null;
};
