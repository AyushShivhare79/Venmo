"use client";

interface inputsProp {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  onChange: any;
}

export const Inputs = ({
  id,
  type,
  label,
  placeholder,
  onChange,
}: inputsProp) => {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          className="border border-black focus:outline-none focus:border-blue-600 focus:border-2  rounded-md h-8"
        />
      </div>
    </>
  );
};
