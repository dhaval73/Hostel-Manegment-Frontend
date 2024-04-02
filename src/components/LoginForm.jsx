import { Button, Input } from './index.js'
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import authService from '../service/auth.js';
import authStore from '../store/authStore.js';
function LoginForm() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const {login }= authStore((state)=>({login:state.login}))
  const onSubmit = async (data) => { 
    console.log(data)
    try {
      const res = await authService.login(data)
      console.log(res);
      if(res == true){
        const res =authService.getUser
        if (res) {
          login(res)
        }
        navigate("/")
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
            <span onClick={()=>navigate("/sign_up")} >Sign Up</span>
          </div>
          <Button type="submit" className=" w-[100px]" />

        </form>
      </div>
    </div>
  )
}

export default LoginForm