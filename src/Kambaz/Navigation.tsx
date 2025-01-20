import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KambazNavigation() {
  return (
    <div
      id="wd-kambaz-navigation"
      style={{ width: 120 }}
      className="list-group rounded-0 position-fixed
    bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <Link
        to="/Kambaz/Account"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <FaRegCircleUser className="fs-1 text text-white" />
        <br />
        Account
      </Link>
      <Link
        to="/Kambaz/Dashboard"
        className="list-group-item text-center border-0
                  bg-white text-danger"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </Link>
      <Link
        to="/Kambaz/Courses"
        className="list-group-item text-white
                  bg-black text-center border-0"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </Link>
      <Link
        to="/Kambaz/Inbox"
        className="list-group-item text-white
                  bg-black text-center border-0"
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </Link>
      <Link
        to="/Kambaz/Calendar"
        className="list-group-item text-white
                  bg-black text-center border-0"
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </Link>
      <Link
        to="/Kambaz/History"
        className="list-group-item text-white
                  bg-black text-center border-0"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        History
      </Link>
      <Link
        to="/Kambaz/Help"
        className="list-group-item text-white
                  bg-black text-center border-0"
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Help
      </Link>
      <Link
        to="/Labs"
        className="list-group-item text-white
                  bg-black text-center border-0"
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Labs
      </Link>
    </div>
  );
}
