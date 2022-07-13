import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

const NotFound = () => {
  const { token } = useContext(AuthContext)
  return (
    <h1>Adresda adashdiz oka! <Link to={"/" + (token ? "" : "login")}>{token ? "Home" : "Login"}</Link></h1>
  );
}

export default NotFound;