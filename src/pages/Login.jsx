import React from 'react'
import { LoginForm } from '../components'

function Login() {
  return (
    <div className=" container px-44 ">
      <main className="flex flex-col items-center px-11 py-12 bg-zinc-50 max-md:px-5  " >
        <section className="self-stretch px-3.5 py-2.5 mt-8 shadow-2xl bg-zinc-300 rounded-[50px_0px] max-md:max-w-fit">
          <article className="flex max-w-fit max-md:flex-col bg-slate-900/10 max-md:gap-0 rounded-[50px_0px] overflow-hidden ">
            <div className=" w-fit h-full max-md:ml-0">
            <img loading="lazy"
            className='  object-cover h-full size-full  inset-0 overflow-hidden' 
            src='https://www.admissions.rku.ac.in/img/campus/rk-university-hostel-rajkot-2.jpg'></img>
              
            </div>
            <div className="h-full min-w-[320px] w-[50%]">
              <LoginForm />
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default Login