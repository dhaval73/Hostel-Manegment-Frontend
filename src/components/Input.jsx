import  { forwardRef } from 'react'

function Input({
    label,
    type="text",
    id="",
    className="",
    required=false,
    error,
    ...props
},ref) {
    return (
        <>
            <div className="mb-4 h-full">
                {label && 
                <label
                    htmlFor={id}
                    className="flex justify-between text-gray-700 text-sm font-semibold mb-2 ps-2"
                >
                    <span>
                    {label} {required ? "*":""} 
                    </span>
                    {error && <span className='text-red-700'>{error.message}</span>}
                </label>
                }
                <input
                    type={type}
                    id={id}
                    className={`form-input w-full px-4 py-2 border rounded-br-2xl rounded-tl-2xl  text-gray-700 text-lg focus:ring-blue-500 ${className} ${error && "border-red-700 border-2 outline-none"} `}
                    required={required}
                    placeholder={ props.placeholder ? props.placeholder : label}
                   {...props}
                   ref={ref}
                />
            </div>
        </>
    )
}

export default forwardRef(Input)