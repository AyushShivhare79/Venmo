"use client"

interface inputsProp {
  type: string;
  label: string;
  placeholder: string;
}

export const Inputs = ({ type, label, placeholder }: inputsProp) => {
  return (
    <>
      <div>
        <label htmlFor={type}>{label}</label>
        <input type={type} id={type} placeholder={placeholder} />
      </div>
    </>
  );
};
