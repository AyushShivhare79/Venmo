"use client";

import { Inputs } from "@repo/ui/Inputs";
//Check 1
const Signup = () => {

  return (
    <>
      <div>
        <Inputs type="email" label="Username" placeholder="ayush@gmail.com" />
        <Inputs type="password" label="Password" placeholder="12345678" />
        <Inputs type="text" label="First Name" placeholder="Ayush" />
        <Inputs type="text" label="Last Name" placeholder="Shivhare" />
        <Inputs type="number" label="Mobile Number" placeholder="9234563215" />

        <button>Submit</button>
        
      </div>
    </>
  );
};

export default Signup;
