import React from 'react'
import { Input } from './index.js'


function LoginForm() {
  return (
    <div className=' container   border-black w-full flex items-center justify-center mt-10'>
      <div className="w-full max-w-[50%] border-black border flex flex-col  items-center justify-center rounded-br-3xl rounded-tl-3xl ">
        <div className="w-full text-3xl font-bold flex justify-center mb-10">Login Form</div>
        <div className="w-full max-w-[100%]">
          <Input
            type="text"
            label="Name"

          />
          <Input type="text" />
          <Input type="text" />
          <Input />
        </div>
      </div>



    </div>
  )
}

export default LoginForm