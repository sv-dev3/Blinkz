import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "src/components/ui-components/Footer";

const Profile = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log("===============");
    console.log("Form Values : ", formData);
    console.log("================");
    alert("Form Submitted");
  };

  return (
    <>
      <div className="h-[500px] sm:h-[700px] flex items-center justify-center mb-10 sm:mb-0">
        <form onSubmit={handleFormSubmit} className="w-[500px] mx-auto p-4">
          <h1 className="text-3xl lg:text-4xl font-outfitSemiBold text-center mb-8 sm:mb-12 ">
            Login
          </h1>
          <div className="mb-6">
            <label className=" text-black block font-outfitRegular text-[16px] mb-2">
              Email
            </label>
            <input
              className="w-full px-2 py-2 sm:px-4 sm:py-4 border rounded-full bg-gray-100 text-black  font-outfitRegular mb-4 placeholder:text-[#707070]"
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              value={formData.email}
              required
            />
          </div>
          <div className="">
            <label className=" mx-auto text-black block font-outfitRegular text-[16px] mb-2">
              Password
            </label>
            <input
              className="w-full px-2 py-2 sm:px-4 sm:py-4 border rounded-full  bg-gray-100 font-outfitRegular  text-black mb-4 placeholder:text-[#707070]"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              value={formData.password}
              required
            />
          </div>
          <Link
            to="/sign-up"
            className="form__text--link text-md text-center mt-6 text-gray-500 underline capitalize font-outfitLight"
          >
            Forgot your password?
          </Link>
          <button className="w-full block px-2 py-2 sm:px-4 sm:py-4 bg-black hover:bg-white hover:text-black border border-[#000] text-white transition rounded-full mt-8 text-[16px] font-outfitSemiBold">
            Sign In
          </button>
          <Link
            to="/sign-up"
            className="form__text--link block w-full text-center mt-6 font-outfitRegular underline underline-offset-8"
          >
            Create Account?{" "}
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
