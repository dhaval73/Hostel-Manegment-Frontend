import { Link } from "react-router-dom";
import { Button, Input, ShowStudentTabel } from "../../components";


function Home_admin() {

  return (
    <>
      <div className="flex flex-col px-16 py-12 bg-zinc-50 justify-center items-center">
        <header className="flex flex-col justify-center items-center mt-20 mr-12 max-w-full w-[692px]">
          <h1 className="text-4xl tracking-tighter text-black leading-[60px]">Student Details</h1>
        </header>
        
        <main className="flex flex-col gap-0 mt-5 justify-center items-center">
          
          <div className="">
            <ShowStudentTabel />
          </div>
        </main>
      </div>
    </>
  )
}

export default Home_admin


