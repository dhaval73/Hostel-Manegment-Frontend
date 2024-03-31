import React from 'react'
import { Button, Input } from './index.js'
import { useForm } from "react-hook-form"

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div className=' w-full h-full  '>
      <div className="w-full   flex flex-col  items-center justify-center  p-10">
        <div className="w-full text-3xl font-bold flex justify-center mb-10">Sign In</div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full  flex flex-col justify-center items-center">
          <Input
            label="user email"
            placeholder="dhaval@gmail.com"
            id="email"
            type="email"
            {...register("email", { required: "User Email is required" })}
            error={errors?.email}
          />
          <Input
            id="password"
            type="password"
            label="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long"
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                message: "Password must contain at least one uppercase letter, one lowercase letter, and one digit"
              }
            })}
            error={errors?.password}
          />

          <div className=" w-full flex justify-between text-blue-700 mb-5 px-1 cursor-pointer focus:cursor-auto">
            <span>Forgote Password ?</span>
            <span>Sign Up</span>
          </div>
          <Button type="submit" className=" w-[100px]" />

        </form>
      </div>
    </div>
  )
}

export default LoginForm