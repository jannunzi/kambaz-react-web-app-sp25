import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div>
      <h3>Sign In</h3>
      <Form.Control placeholder="username" className="mb-2" />
      <Form.Control type="password" placeholder="password" className="mb-2" />
      <Link
        to="/Kambaz/Dashboard"
        id="wd-signin-btn"
        className="btn btn-primary w-100 mb-2"
      >
        Sign In
      </Link>
      <Link to="/Kambaz/Account/Signup" id="wd-signup-link" className="mt-2">
        Sign Up
      </Link>
    </div>
  );
}
