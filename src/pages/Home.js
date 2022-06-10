import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { setcurrentTime } from "../Redux/Reduser";
import { useSelector, useDispatch } from "react-redux";

function Home() {

  const currentTime = useSelector((state) => state.data.currentTime);
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const navigate = useNavigate();
  const token = cookies.get("ut");
  const date = new Date().toString().substr(15, 15);
  const justTime = date.substr(0, 10);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    dispatch(setcurrentTime(justTime));
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {token ? (
        <div> currentTime {currentTime}</div>
      ) : (
        <div>there is not token please go to login page and sign in</div>
      )}
    </div>
  );
}

export default Home;
