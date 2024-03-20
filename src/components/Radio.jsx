import { forwardRef, useId } from "react"

function Radio({
  name="radio",
  label
},
ref
) {
  const id = useId()
  return (
    <div>
        <input id={id} name={name} ref={ref} className=" accent-gray-700" type="radio" />
        <label htmlFor={id} className=" pl-1" >{label && label}</label>
    </div>
  )
}

export default  forwardRef(Radio)