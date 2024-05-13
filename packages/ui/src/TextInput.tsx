"use client";

import { ChangeEventHandler } from "react";

export const TextInput = ({
  label,
  placeholder,
  onChange,
}: {
  label: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="">{label}</label>
        <input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          className="border rounded-md p-2 focus:outline-none focus:border-blue-500 focus:border-2  "
        />
      </div>
    </>
  );
};
