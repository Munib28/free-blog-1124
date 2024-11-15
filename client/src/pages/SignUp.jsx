import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Button, Label, TextInput } from "flowbite-react";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <Link to="/">
            <img className="w-48" src={logo} alt="" />
          </Link>
          <p className="text-sm font mt-5">
            This is a Free Blog Application. You can sign up with your email and
            password or with Google.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your Username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput type="text" placeholder="Email" id="email" />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button type="submit">Sign Up</Button>
          </form>
          <div className="flex gap-2 text-sm mt-4">
            <span>Have an account? </span>
            <Link to="/sign-in" className="text-orange-600 font-semibold">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
