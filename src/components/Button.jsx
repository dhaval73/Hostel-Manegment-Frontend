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
      className={`${color == "blue" && 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-600'} 
      ${color == "green" && 'bg-green-700 hover:bg-green-800 focus:ring-green-600'}
      ${color == "zinc" && 'bg-zinc-800 hover:bg-zink-700 focus:ring-zinc-600'}  text-white px-4 py-1 mx-1 rounded-tl-2xl rounded-br-2xl focus:ring-2 focus:ring-opacity-100 w-fit ${className}`}
      {...props}
      ref={ref}
    >
      {children || text}
    </button>
  );
}

export default forwardRef(Button);
