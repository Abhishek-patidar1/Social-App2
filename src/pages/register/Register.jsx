import { Link } from "react-router-dom";
import "./register.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social App.</h1>
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
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
          </form>
          <div className="buttons">
            <button>Register</button>
            <div className="none">
          <Link to="/login">
          <button>Login</button>
          </Link>         
          <span>Do you have an account?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;