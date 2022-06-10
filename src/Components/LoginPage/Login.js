import React, { useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../Redux/Reduser";

function Login() {
  const [email, setEmail] = useState("joe@example.com");
  const [password, setPassword] = useState("Password1");
  const cookies = new Cookies();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUserToken = async () => {
    if (!email || !password) {
      alert("email && password is require");
      return;
    }
    try {
      const response = await fetch("https://api.m3o.com/v1/user/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer M2RmOGI0OWQtYmY2OS00MTQyLWIyYTItMjIxMjAwYjAxZGE1",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const res = await response.json();
      const token = res.session.id;
      cookies.set("ut", token);
      dispatch(setToken(token));
      navigate("/");
    } catch (error) {
      navigate("/");
    }
  };

  return (
    <section className=" w-full h-screen flex justify-center items-center ">
      <div className="w-[500px] h-[500px] bg-[#fff] drop-shadow-lg rounded-md flex flex-col justify-center items-center">
        <h1 data-testid="header" className="text-[30px] font-bold">
          Sign In
        </h1>
        <section className="flex flex-col h-[300px] mt-10">
          <input
            className="w-[300px] h-[35px] px-5 text-[12px] bg-[#0000000c] rounded-[4px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="username"
            data-testid="emailInput"
          />
          <input
            className="w-[300px] h-[35px] px-5 text-[12px] bg-[#0000000c] rounded-[4px] mt-5"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            data-testid="passwordInput"
          />
          <button
            onClick={() => getUserToken()}
            className="rounded-[4px] bg-[#0001] w-[100px] h-[35px] m-auto text-[12px] hover:bg-[#00000032] "
          >
            submit
          </button>
        </section>
      </div>
    </section>
  );
}

export default Login;
