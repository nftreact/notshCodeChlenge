import React from "react";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const cookies = new Cookies();
  const token = cookies.get("ut");
  const navigate = useNavigate();

  const removeToken = () => {
    cookies.remove("ut");
    navigate("/");
  };
  return (
    <section
      dir="rtl"
      className="w-full  h-[40px] flex items-center bg-[#0000002a] "
    >
      <div className="w-[90%] m-auto">
        {token ? (
          <button onClick={() => removeToken()}>logOut</button>
        ) : (
          <Link to="/login">
            <button>login</button>
          </Link>
        )}
      </div>
    </section>
  );
}

export default Navbar;
