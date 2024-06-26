import { forwardRef } from 'react'

function Input({
    label,
    type = "text",
    id = "",
    className = "",
    required = false,
    error,
    ...props
}, ref) {
    return (
        <>
            <div className="mb-4 min-w-[200px] w-full">
                {label &&
                    <label
                        htmlFor={id}
                        className="flex justify-between text-gray-700 text-sm font-semibold  ps-2"
                    >
                        <span>
                            {label} {required ? "*" : ""}
                        </span>
                    </label>
                }
                <input
                    type={type}
                    id={id}
                    className={`form-input w-full px-4 py-1 border rounded-br-xl rounded-tl-xl border-gray-300 border-l-2 border-t-2   text-gray-700 text-lg focus:ring-blue-500 ${className} ${error && "border-red-700 border-2 outline-none"} ${type === 'number' && "[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"}`}
                    required={required}
                    placeholder={props.placeholder ? props.placeholder : label}
                    {...props}
                    ref={ref}
                    
                />
                        {error && <span className='text-red-700'>{error.message}</span>}

            </div>
        </>
    )
}

export default forwardRef(Input)