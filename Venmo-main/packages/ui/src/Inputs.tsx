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
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </>
  );
};
