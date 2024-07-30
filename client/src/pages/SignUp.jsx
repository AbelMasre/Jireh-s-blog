import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-12">
        {/* left side */}
        <div className="flex-1 ">
          <Link to="/" className="  font-bold dark:text-white text-6xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white">
              Jireh's
            </span>{" "}
            Blog
          </Link>
          <p className="text-lg mt-5">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum unde
            ea, modi, possimus{" "}
          </p>
        </div>
        {/* Right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your Name" />
              <TextInput type="text" placeholder="username" id="username" />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput type="text" placeholder="name@company.com" id="email" />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="text" placeholder="password" id="password" />
            </div>
            <Button  gradientDuoTone='purpleToPink' outline >Sign Up</Button>
          </form>
          <div className="flex gap-2 mt-1 text-md">
            <span>Have an account?</span>
            <Link to='/signin' className="text-blue-500 underline">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
