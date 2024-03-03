import { useId } from "react"

function Radio({
  name="radio",
  label
}
) {
  const id = useId()
  return (
    <div>
        <input id={id} name={name} className=" accent-gray-700" type="radio" />
        <label htmlFor={id} className=" pl-1" >{label && label}</label>
    </div>
  )
}

export default Radio