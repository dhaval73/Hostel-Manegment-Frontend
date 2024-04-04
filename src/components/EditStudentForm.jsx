
import { useForm } from "react-hook-form"
import {AlertMessageDanger, AlertMessageSuccess, Button, Input, Radio, Textarea} from "./index.js"
import studentService from '../service/students.js'
import studentStore from '../store/studentStore.js'
import {useParams} from "react-router-dom"
import { useState } from "react"

function EditStudentForm() {
  const [showAlertDanger, setShowAlertMessage] = useState({ isShow: false, message: "" })
  const [showAlertSuccess, setShowAlertSuccess] = useState({ isShow: false, message: "" })
    const  {id} = useParams();
  const updateStudent = studentStore((state) => state.updateStudent)
  const student = studentStore(state => state.getStudent(id));
  
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm({
        defaultValues:{... student ,date_of_birth:student?.date_of_birth.substring(0, 10)}
      })
    
      const onSubmit = (data) => {
        console.log(data);
        (async()=>{
      try {
          const res = await studentService.update(id,data)
          if(res){
            console.log(res)
            updateStudent(id,res)
            setShowAlertSuccess({ isShow: true, message:"Save sucessfull" })
          }
      } catch (error) {
        console.log(error);
        setShowAlertMessage({ isShow: true, message: error })
      }finally {
        setTimeout(() => {
          setShowAlertMessage({ isShow: false })
          setShowAlertSuccess({ isShow: false})
        }, 3000);
      }
    })()
      }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-5 flex flex-col items-center justify-center ' >
        <div className='grid grid-cols-2 gap-x-10 max-sm:grid-cols-1 row-span-4'>
        <Input
          label="First name"
          placeholder="Dhaval"
          {...register("first_name", {
            required: "First name is required",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "First name should contain only letters"
            }
          })}
          error={errors.first_name}
        />
    <Input 
    label='Last Name'
    placeholder="Dhaval"
          {...register("last_name", {
            required: "Last name is required",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Last name should contain only letters"
            }
          })}
          error={errors.last_name}
    />
    <Input 
    label='Enrollment No' 
    {...register("enrollment_number", {
        required: "Enrollment No is required",
        pattern: {
            value: /^[A-Za-z0-9]{10,16}$/,
            message: "Enrollment No should contain only letters and numbers and be between 10 to 16 characters"
        }
      })}
      error={errors.enrollment_number}
    />
    <Input
          label="Mobile no"
          type="tel"
          placeholder="+91 9408895506"
          defaultValue="+91 "
          {...register("mobile_number", {
            required: "Mobile number is required",
            pattern: {
              value: /^(\+91[\\-\s]?)?[0]?(91[\\-\s])?(91)?\d{10}$/,
              message: "Please enter a valid Indian mobile number"
            }
          })}
          error={errors.mobile_number}
        />

    <Input 
    label='Room number'
    {...register("room_number", {
        required: "Room No is required",
        pattern: {
            value: /^[A-Za-z0-9]/,
            message: "Room No should contain only letters and numbers"
        }
      })}
      error={errors.room_number}
    />
    <Input 
    label='Room number'
    {...register("room_number", {
        required: "Room No is required",
        pattern: {
            value: /^[A-Za-z0-9]/,
            message: "Room No should contain only letters and numbers"
        }
      })}
      error={errors.room_number}
    />

    
<Input 
    type="date" 
    label='Date Of Birth' 
    className="" 
    {...register("date_of_birth", {
        required: "Date of Birth is required",
    })}
    error={errors.date_of_birth}
/>


<div className="sm:col-span-2">
    <Radio
        label="Select Gender "
        name="gender"
        containerClassName="sm:!flex-row sm:gap-5"
        options={[
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ]}
        error={errors.gender}
        control={control} // Pass control from react-hook-form
        rules={{ required: "Please select one" }} // Optional: pass validation rules
        />

</div>
<div className="sm:col-span-2">
    
<Textarea
          className="resize-none"
          type="textarea"
          label="Address"
          placeholder="Amra , jamnagar ... "
          {...register("address", {
            required: "Address is required"
          })}
          error={errors.address}
        />
    </div>
    </div>
    <Button type="submit" color="zinc" className="px-6" />
    <AlertMessageDanger
        showAlertDanger={showAlertDanger}
      />
      <AlertMessageSuccess
        showAlertSuccess={showAlertSuccess}
      />
  </form>
  )
}

export default EditStudentForm