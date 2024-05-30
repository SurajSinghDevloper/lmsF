import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { HiChevronDoubleRight } from "react-icons/hi2";
import auth from "../assets/Downpic.png";
import schoolImg from "../assets/schoolImgAuth.png";
import { PiSignInBold } from "react-icons/pi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { signupAction } from '../Redux/Actions/SignupAction';
import { loginAction } from "../Redux/Actions/LoginAction";

function AuthForm() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.signup);
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobile: '',
    dob: '',
    address: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (isLogin) => {
    if (isLogin) {
      const email = formData.email;
      const password = formData.password;
      const data = { email, password }
      dispatch(loginAction(data));

    } else {
      dispatch(signupAction(formData));
    }
  };

  const handleFormState = (type) => {
    if (type == "login") {
      setIsLogin(true)
    } else {

      setIsLogin(false)
    }
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="bg-gradient-to-b from-red-700 to-red-900 text-white p-8 md:w-1/4">
        <div className="flex justify-center mb-10">
          <img src={auth} alt="icon" className="h-40 w-40" />
        </div>
        <div className="space-y-8">
          <div className="flex flex-col-1 space-x-2">
            <HiChevronDoubleRight className="h-9 w-12" />
            <p className="font-semibold mt-1 text-l">
              Discover, compare, shortlist your preferred schools, and much
              more.
            </p>
          </div>
          <div className="flex flex-col-1 space-x-2">
            <HiChevronDoubleRight className="h-9 w-12" />
            <p className="font-semibold mt-1 text-l">
              Apply to multiple schools using a common application form.
            </p>
          </div>
          <div className="flex flex-col-1 space-x-2">
            <HiChevronDoubleRight className="h-9 w-12" />
            <p className="font-semibold mt-1 text-l">
              Stay up to date with admissions, fees structures, facilities and
              much more.
            </p>
          </div>
          <div className="flex flex-col-1 space-x-2">
            <HiChevronDoubleRight className="h-9 w-12" />
            <p className="font-semibold mt-1 text-l">
              Lakhs of parents trust us for our industry-leading free counseling
              services.
            </p>
          </div>
        </div>
        <div className="mt-2">
          <img src={schoolImg} alt="schollImg" />
          <div className="text-center mt-2">
            <p className="text-xl font-semibold text-white">
              Saint Xavier University
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center  md:w-3/4">
        <div className="flex justify-end w-full mr-10 p-2">
          <button onClick={() => handleFormState("signup")} className="text-blue-600 border-2 border-black rounded-lg  p-2  mr-4 flex justify-center text-xl">
            <span>
              <AiOutlineUserAdd className="h-8 w-8" />
            </span>
            Sign up
          </button>
          <button onClick={() => handleFormState("login")} className="text-green-800 border-2 border-black rounded-lg p-2  mr-4 flex justify-center text-xl">
            <span>
              <PiSignInBold className="h-8 w-8" />
            </span>
            Log in
          </button>
          <Link
            to={"/"}
            className="text-zinc-500 border-2 border-black rounded-lg p-2  mr-4 flex justify-center text-xl"
          >
            <span>
              <IoHomeOutline className="h-8 w-8" />
            </span>
            Home
          </Link>
        </div>
        <h2 className="text-3xl font-bold">{isLogin ? "Login to Continue" : "Register to Continue"}</h2>
        <hr className="w-3/12" />
        <div className="w-2/3 mt-10">
          {!isLogin &&

            <div className="flex mt-4 space-x-4">
              <input
                type="text"
                placeholder="Your first name"
                className="border p-2 rounded-l-lg w-1/2"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
              />
              <input
                type="text"
                placeholder="Your last name"
                name="lastName"
                className="border p-2 rounded-l-lg w-1/2"
                onChange={handleChange}
                value={formData.lastName}
              />
            </div>
          }
          <div className={`flex ${!isLogin ? "mt-4 space-x-4" : "justify-center"}`}>

            <input
              type="email"
              placeholder="Your email"
              name="email"
              className="border p-2 rounded-l-lg w-1/2"
              onChange={handleChange}
              value={formData.email}
            />
            {!isLogin &&
              <input
                type="mobile"
                placeholder="Your mobile"
                name="mobile"
                className="border p-2 rounded-l-lg w-1/2"
                onChange={handleChange}
                value={formData.mobile}
              />
            }
          </div>
          <div className={`flex ${!isLogin ? "mt-4 space-x-4" : "justify-center mt-5"}`}>
            {!isLogin &&
              <input
                type="date"
                placeholder="Your dob"
                name="dob"
                className="border p-2 rounded-l-lg w-1/2"
                onChange={handleChange}
                value={formData.dob}
              />
            }
            <input
              type="password"
              placeholder="Your password"
              name="password"
              className="border p-2 rounded-l-lg w-1/2"
              onChange={handleChange}
              value={formData.password}

            />
          </div>
          {!isLogin &&
            <div className="flex mt-4 justify-center">
              <input
                type="text"
                placeholder="Your address"
                name="address"
                className="border p-2 rounded-l-lg w-4/5"
                onChange={handleChange}
                value={formData.address}
              />
            </div>
          }
        </div>

        <button onClick={() => handleSubmit(isLogin)} disabled={loading} className="bg-zinc-800 text-white py-2 px-4 rounded-lg mt-10">
          {!isLogin ? "Sign Up" : "Login"} {loading && <i className="fas fa-spinner fa-spin"></i>}


        </button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && <p>Sign up successful!</p>}
        <div className="flex items-center mt-4">
          <hr className="flex-grow border-t border-zinc-300" />
          <span className="px-2 text-zinc-500">OR</span>
          <hr className="flex-grow border-t border-zinc-300" />
        </div>
        <div className="flex space-x-4 mt-4">
          <button className="bg-white p-2 rounded-full shadow">
            <FaWhatsapp className="h-12 w-12" />
          </button>
          <button className="bg-white p-2 rounded-full shadow">
            <FaGoogle className="h-12 w-12" />
          </button>
          <button className="bg-white p-2 rounded-full shadow">
            <MdOutlineMarkEmailRead className="h-12 w-12" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
