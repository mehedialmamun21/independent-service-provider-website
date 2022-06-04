import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../Login/SocialLogin/SocialLogin";


const Register = () => {
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  let registeredElement;
  if (user) {
    registeredElement =
      <div>
        <p className='text-success font-weight-bold'>Registration Successful ; go to Login page to login</p>
      </div>
  }

  const handleRegister = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password)

  }

  return (
    <div className="register-form">
      <h2 style={{ textAlign: "center" }} className="text-primary text-center mt-4" >Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="your name" />

        <input
          type="email"
          name="email"
          id=""
          placeholder="email address"
          required
        />

        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          required
        />
        <p>{registeredElement}</p>
        <input className="register" type="submit" value="Register" />
      </form>
      <p>
        Already have an account?
        <Link
          to={"/login"}
          className="text-danger text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
