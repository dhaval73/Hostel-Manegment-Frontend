import { forwardRef, useId } from "react";
import { Controller } from "react-hook-form";

function Radio(
  {
    name = "radio",
    options = [],
    control,
    error,
    containerClassName = "",
    label = "",
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <div className="flex flex-col mb-5  ">
    <div className={`flex flex-col w-full ${containerClassName}`} >
    <label className=" text-black ">{label}</label>
    <Controller
      control={control}
      name={name}
      render={({ field :{onChange} }) => (
        <div className="flex flex-row items-start gap-4" >
          {options.map((option, index) => (
            <div key={index} >
              <input
                id={`${id}-${index}`}
                name={name}
                ref={ref} 
                defaultChecked={option?.default}
                onChange={() =>onChange(option.value)}
                value={option.value}
                className="accent-gray-700 "
                type="radio"
              />
              <label htmlFor={`${id}-${index}`} className="pl-1">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      )}
      {...props}
    />

    </div>
    {error && <span className='text-red-700'>{error.message}</span>}
  </div>
   
  );
}


export default forwardRef(Radio)
