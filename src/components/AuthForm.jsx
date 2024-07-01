import React, { useState, useEffect } from "react";
import { FaGoogle, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { HiChevronDoubleRight } from "react-icons/hi2";
import auth from "../assets/Downpic.png";
import schoolImg from "../assets/schoolImgAuth.png";
import { PiSignInBold } from "react-icons/pi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { signupAction } from '../Redux/Actions/SignupAction';
import { loginAction } from "../Redux/Actions/LoginAction";

function AuthForm() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobile: '',
    dob: '',
    address: ''
  });

  useEffect(() => {
    if (login.authenticate) {
      navigate('/features');
    }
  }, [login.authenticate, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (isLogin) {
      const { email, password } = formData;
      dispatch(loginAction({ email, password }));
    } else {
      dispatch(signupAction(formData));
    }
  };

  const handleFormState = (type) => {
    setIsLogin(type === "login");
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 h-screen">
      <div className="hidden md:block bg-gradient-to-b from-red-700 to-red-900 text-white p-8 md:col-span-1">
        <div className="flex justify-center mb-10">
          <img src={auth} alt="icon" className="h-20 w-30" />
        </div>
        <div className="">
          <div className="flex items-center space-x-2">
            <HiChevronDoubleRight className="h-9 w-12" />
            <p className="font-semibold mt-1 ">
              Discover, compare, shortlist your preferred schools, and much more.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <HiChevronDoubleRight className="h-9 w-12" />
            <p className="font-semibold mt-1 ">
              Apply to multiple schools using a common application form.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <HiChevronDoubleRight className="h-9 w-12" />
            <p className="font-semibold mt-1 ">
              Stay up to date with admissions, fees structures, facilities and much more.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <HiChevronDoubleRight className="h-9 w-12" />
            <p className="font-semibold mt-1 ">
              Lakhs of parents trust us for our industry-leading free counseling services.
            </p>
          </div>
          <div className="mt-2">
            <img src={schoolImg} alt="schoolImg" />
            <div className="text-center mt-2">
              <p className="text-xl font-semibold text-white">
                Saint Xavier University
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:col-span-4 p-4 md:p-8">
        <div className="flex justify-end w-full -mt-6">
          <button onClick={() => handleFormState("signup")} className="text-blue-600 border-2 p-2 border-black rounded-lg mr-3 flex items-center text-l">
            <AiOutlineUserAdd size={20} />
            Sign up
          </button>
          <button onClick={() => handleFormState("login")} className="text-green-800 border-2 p-2 border-black rounded-lg mr-3 flex items-center text-l">
            <PiSignInBold size={20} />
            Log in
          </button>
          <Link to={"/"} className="text-zinc-500 border-2 border-black rounded-lg p-2 flex items-center text-l">
            <IoHomeOutline size={20} />
            Home
          </Link>
        </div>
        <h2 className={`text-3xl font-bold mb-2 ${!isLogin ? "sm:ml-10" : ""}`}>
          {isLogin ? "Login to Continue" : "Register to Continue"}
        </h2>

        <hr className="w-3/12 mb-4" />
        <div className={`w-full max-w-lg ${isLogin ? "md:w-1/2" : ""}`}>
          {!isLogin &&
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your first name"
                className="border p-2 rounded-lg"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
              />
              <input
                type="text"
                placeholder="Your last name"
                name="lastName"
                className="border p-2 rounded-lg"
                onChange={handleChange}
                value={formData.lastName}
              />
            </div>
          }
          <div className={`grid grid-cols-1 ${!isLogin ? "md:grid-cols-2 gap-4 mb-4" : "md:w-2/3 mx-auto mb-4"}`}>
            <input
              type="email"
              placeholder="Your email"
              name="email"
              className="border p-2 rounded-lg"
              onChange={handleChange}
              value={formData.email}
            />
            {!isLogin &&
              <input
                type="text"
                placeholder="Your mobile"
                name="mobile"
                className="border p-2 rounded-lg"
                onChange={handleChange}
                value={formData.mobile}
              />
            }
          </div>
          <div className={`grid grid-cols-1 ${!isLogin ? "md:grid-cols-2 gap-4 mb-4" : "md:w-2/3 mx-auto mb-4"}`}>
            {!isLogin &&
              <input
                type="date"
                placeholder="Your dob"
                name="dob"
                className="border p-2 rounded-lg"
                onChange={handleChange}
                value={formData.dob}
              />
            }
            <input
              type="password"
              placeholder="Your password"
              name="password"
              className="border p-2 rounded-lg"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          {!isLogin &&
            <div className="grid mb-4">
              <input
                type="text"
                placeholder="Your address"
                name="address"
                className="border p-2 rounded-lg w-full"
                onChange={handleChange}
                value={formData.address}
              />
            </div>
          }
        </div>
        <button onClick={handleSubmit} disabled={login.loading} className="bg-zinc-800 text-white py-2 px-4 rounded-lg mb-4">
          {!isLogin ? "Sign Up" : "Login"} {login.loading && <i className="fas fa-spinner fa-spin"></i>}
        </button>
        {login.loading && <p>Loading...</p>}
        {login.data && <p>Sign up successful!</p>}
        <div className="flex items-center mt-4 mb-4">
          <hr className="flex-grow border-t border-zinc-300" />
          <span className="px-2 text-zinc-500">OR</span>
          <hr className="flex-grow border-t border-zinc-300" />
        </div>
        <div className="flex space-x-4 mb-4">
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



