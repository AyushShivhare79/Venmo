"use client";

import AppbarClient from "./AppbarClient";
import { Test } from "./Test";

export default function Page(): JSX.Element {
  return (
    <>
      <AppbarClient />
      <Test />
    </>
  );
}
