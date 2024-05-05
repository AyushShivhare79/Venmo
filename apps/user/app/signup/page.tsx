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

//Check 1

const Signup = () => {
  const [username, setUsername] = useRecoilState(usernameAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  const [firstName, setFirstName] = useRecoilState(firstNameAtom);
  const [lastName, setLastName] = useRecoilState(lastNameAtom);
  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberAtom);

  return (
    <>
      <div>
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
          placeholder="Shivhare"
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
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Signup;
