import { forwardRef } from "react";

function Button(
  {
    text = "Button",
    type = "button",
    className = "",
    color = "green",
    children,
    ...props
  },
  ref
) {
  // Define the dynamic class name for the button's background color
  

  return (
    <button
      type={type}
      className={`bg-blue-700 hover:bg-blue-800 focus:ring-blue-600  text-white px-4 py-1 mx-1 rounded-tl-2xl rounded-br-2xl focus:ring-2 focus:ring-opacity-50 ${className}`}
      {...props}
      ref={ref}
    >
      {children || text}
    </button>
  );
}

export default forwardRef(Button);
