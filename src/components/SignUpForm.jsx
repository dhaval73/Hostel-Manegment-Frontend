import { Button, Input } from './index.js'
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import authService from "../service/auth.js"

function SignUpForm() {
  const navigate = useNavigate()
  const {
    register,
    unregister,
    handleSubmit,
    watch,
    formState: { errors  },
  } = useForm()

  const onSubmit = async (data) => {
    unregister("cpassword")
    console.log(data)
    try {
      const res = await authService.register(data)
      console.log(res);
      if(res == true){
        navigate("/login")
      }
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className=' w-full h-full  '>
      <div className="w-full   flex flex-col  items-center justify-center  p-10">
        <div className="w-full text-3xl font-bold flex justify-center mb-10">Sign In</div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full  flex flex-col justify-center items-center">
          <Input
            label="user name"
            placeholder="Dhaval Dharaviya"
            id="username"
            type="text"
            {...register("username", { required: "User Name is required" })}
            error={errors?.username}
          />
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

          <Input
            id="cpassword"
            type="password"
            label="Confirm Password"
            {...register("cpassword", {
              required: "Confirm Password is required",
              validate: {
                matchesPassword: (value) => value === watch("password") || "Passwords do not match"
              }
            })}
            error={errors?.cpassword}
          />


          <div className=" w-full flex justify-between text-blue-700 mb-5 px-1 cursor-pointer focus:cursor-auto">
            <span>Forgote Password ?</span>
            <span onClick={() => navigate("/login")}>Login</span>
          </div>
          <Button type="submit" className=" w-[100px]" />

        </form>
      </div>
    </div>
  )
}

export default SignUpForm