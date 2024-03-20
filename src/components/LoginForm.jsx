import React from 'react'
import { Button, Input } from './index.js'


function LoginForm() {
  return (
    <div className=' w-full h-full  '>
      <div className="w-full   flex flex-col  items-center justify-center  p-10">
        <div className="w-full text-3xl font-bold flex justify-center mb-10">Sign In</div>
        <div className="w-full  flex flex-col justify-center items-center">
          <Input
            type="text"
            label="user name"
          />
          <Input
            type="password"
            label="password"
          />
          <Input
            type="password"
            label="password"
          />
          <Input
            type="password"
            label="password"
          />
          <div className=" w-full flex justify-between text-blue-700 mb-5 px-1 cursor-pointer focus:cursor-auto">
            <span>Forgote Password ?</span>
            <span>Sign Up</span>
          </div>
          <Button className=" w-[100px]" />
         
        </div>
      </div>



    </div>
  )
}

export default LoginForm