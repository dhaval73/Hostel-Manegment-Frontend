
import { LoginForm } from '../components'

function Login() {
  return (
    <div className="  flex justify-center ">
      <main className=" container max-w-5xl max-lg:max-w-2xl max-sm:max-w-sm flex flex-col items-center  bg-zinc-50  w-full " >
        <section className="self-stretch px-3.5 py-2.5 mt-8 shadow-2xl bg-zinc-300 rounded-[50px_0px] max-md:max-w-fit">
          <article className="flex max-lg:items-center max-w-fit max-lg:flex-col bg-slate-900/10 max-md:gap-0 rounded-[50px_0px] overflow-hidden ">
            <div className=" w-full lg:w-8/12 max-xl:h-2/5">
            <img loading="lazy"
            className=' object-fill h-full w-100   inset-0 overflow-hidden' 
            src='https://www.admissions.rku.ac.in/img/campus/rk-university-hostel-rajkot-2.jpg'></img>
              
            </div>
            <div className="flex justify-center  items-center h-full max-xl:h-3/5  lg:w-4/12 max-w-[320px]">
              <LoginForm />
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default Login