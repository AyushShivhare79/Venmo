"use client";

import {
  firstNameAtom,
  lastNameAtom,
  passwordAtom,
  phoneNumberAtom,
  usernameAtom,
} from "@repo/store/signup";
import { Inputs } from "@repo/ui/Inputs";
import axios from "axios";
import { useRecoilState } from "recoil";
import { AuthSwitch } from "../components/AuthSwitch";
import { toast } from "react-toastify";

// Check 1

const Signup = () => {
  const [username, setUsername] = useRecoilState(usernameAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  const [firstName, setFirstName] = useRecoilState(firstNameAtom);
  const [lastName, setLastName] = useRecoilState(lastNameAtom);
  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberAtom);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className=" border border-black p-10 rounded-xl">
          <Inputs
            id="username"
            type="email"
            label="Username"
            placeholder="ayush@gmail.com"
            onChange={(e: any) => setUsername(e.target.value)}
          />
          <Inputs
            id="password"
            type="password"
            label="Password"
            placeholder="12345678"
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <Inputs
            id="fName"
            type="text"
            label="First Name"
            placeholder="Ayush"
            onChange={(e: any) => setFirstName(e.target.value)}
          />
          <Inputs
            id="lName"
            type="text"
            label="Last Name"
            placeholder="Shivhare"
            onChange={(e: any) => setLastName(e.target.value)}
          />
          <Inputs
            id="phone"
            type="number"
            label="Mobile Number"
            placeholder="9234563215"
            onChange={(e: any) => setPhoneNumber(e.target.value)}
          />
          {/* //Trying to add the toast message here. */}

          {/* <div className="flex justify-center items-center border rounded-md bg-green-500 text-white mt-2"> */}
          {/* {check ? toast.success("User register sucessfully!") : toast.error("Oops")} */}
          {/* </div> */}

          {/* // */}
          <button
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/api/signup",
                {
                  username,
                  password,
                  firstName,
                  lastName,
                  phoneNumber,
                }
              );

              console.log("During signup: ", response.data.msg);

              if (response.data.msg === "1") {
                toast.success("User Signup successful!");
              } else {
                toast.error("User already register!");
              }
            }}
            className="block m-auto border rounded-md mt-2 bg-blue-600 text-white h-8 w-52"
          >
            Signup
          </button>

          <AuthSwitch
            text="Already have an account?"
            href="/signin"
            main="Login"
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
