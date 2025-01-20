import { Link } from "react-router";

export default function AccountNavigation() {
  return (
    <div>
      <Link to="/Kambaz/Account/Signin">Signin</Link>
      <br />
      <Link to="/Kambaz/Account/Signup">Signup</Link>
      <br />
      <Link to="/Kambaz/Account/Profile">Profile</Link>
    </div>
  );
}
