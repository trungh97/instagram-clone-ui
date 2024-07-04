import { useField } from "formik";
import React from "react";

const TextInput = ({ label, showError, ...props }: any) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <div className="relative w-full">
      <input
        className="peer rounded-[3px] h-9 text-[14px] p-[10px] w-full valid:pt-5 valid:text-[12px] outline-none text-gray-900 bg-gray-50 border border-gray-300 focus:ring-0"
        {...field}
        {...props}
      />
      <label
        className="absolute text-[12px] p-[10px] pt-2 left-0 text-gray-500 peer-valid:translate-y-[-8px] peer-valid:text-[12px] peer-valid:scale-75 peer-valid:left-[4px] z-10 origin-[0] pointer-events-none transition-all"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      {showError && meta.touched && meta.error ? (
        <div className="text-red-600 text-xs">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;
