import { forwardRef, useId } from "react";
import { Controller } from "react-hook-form";

function Radio(
  {
    name = "radio",
    options = [],
    control,
    ...props
  },
  ref
) {
  const id = useId();

  return (
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
                ref={ref} // Remove this line to prevent ref warning
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
  );
}


export default forwardRef(Radio)
