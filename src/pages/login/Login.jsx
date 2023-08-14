import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
        </div>
        <div className="right">
        <Link to="/">
        <ArrowBackIcon/>
        </Link>
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
          </form>
            <div className="buttons">
            <button onClick={handleLogin}>Login</button>
          <Link to="/register">
            <button>Register</button>
          </Link>
            <span>Don't you have an account?</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;