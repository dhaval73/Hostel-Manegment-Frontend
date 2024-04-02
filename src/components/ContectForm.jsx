import contactService from "../service/contactus"
import { Input, Radio, Button, Textarea } from "./index"
import { useForm} from "react-hook-form"
import {useNavigate} from "react-router-dom"
export function ContactForm() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    try {
      (async ()=>{
        const res = contactService.save(data)
      
        if(res){
          navigate("/")
        }
      })()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col h-full py-14 "  >
      <div className=" grid gap-x-10 grid-cols-2  w-full  ">
        <Input
          label="First name"
          placeholder="Dhaval"
          {...register("firstName", {
            required: "First name is required",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "First name should contain only letters"
            }
          })}
          error={errors.firstName}
        />
        <Input
          label="Last name"
          placeholder="Dharaviya"
          {...register("lastName", {
            required: "Last name is required",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Last name should contain only letters"
            }
          })}
          error={errors.lastName}
        />
        <Input
          label="Email" type="email"
          placeholder="dhaval@gmail.com"
          {...register("email", {
            required: "Email is required"
          })}
          error={errors.email}
        />
        <Input
          label="Mobile no"
          type="tel"
          placeholder="+91 9408895506"
          defaultValue="+91 "
          {...register("mobileNo", {
            required: "Mobile number is required",
            pattern: {
              value: /^(\+91[\\-\s]?)?[0]?(91[\\-\s])?(91)?\d{10}$/,
              message: "Please enter a valid Indian mobile number"
            }
          })}
          error={errors.mobileNo}
        />
      </div>


      <Radio
        label="Select inquiry type ?"
        name="inquiryType"
        options={[
          { value: "General", label: "General Inquiry" },
          { value: "Hostel", label: "Hostel Inquiry" },
          { value: "Mess", label: "Mess Inquiry" }
        ]}
        error={errors.inquiryType}
        control={control} // Pass control from react-hook-form
        rules={{ required: "Please select one" }} // Optional: pass validation rules
      />
      <div className="">
        <Textarea
          className="resize-none"
          type="textarea"
          label="Message"
          placeholder="i want to inform"
          {...register("message", {
            required: "Message is required"
          })}
          error={errors.message}
        />
      </div>  


      <div className="flex justify-end ">
        <Button type="submit" className="" color='zinc' />
      </div>
    </form>
  );
}



export default ContactForm