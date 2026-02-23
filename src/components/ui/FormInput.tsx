import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type props = {
  label: string;
  placeholder?: string;
  onChange?: ChangeEventHandler;
  value?: string;
  type?: HTMLInputTypeAttribute;
};

function FormInput({ label, placeholder, onChange, value, type }: props) {
  return (
    <div className=" w-full flex  flex-col">
      <p className=" font-lexend  text-gray font-medium">{label}</p>
      <input
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        className="p-2 w-ful rounded-md outline-none hover:border-primary px-3 mt-1 border-[#d3d3d3] border"
      />
    </div>
  );
}

export default FormInput;
