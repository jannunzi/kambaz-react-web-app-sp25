import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";

export default function Account() {
  return (
    <div>
      <table>
        <tr>
          <td valign="top">
            <AccountNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Signin" />} />
              <Route path="Signin" element={<Signin />} />
              <Route path="Signup" element={<Signup />} />
              <Route path="Profile" element={<Profile />} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}
