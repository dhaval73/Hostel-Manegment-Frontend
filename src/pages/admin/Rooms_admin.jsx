import { Link } from "react-router-dom";
import { Button, Input, SetRoomDetailForm } from "../../components";


function Rooms_admin() {
  return (
    <>
      <div className="flex flex-col w-screen px-16 py-12 bg-zinc-50 justify-center items-center">
        <main className="flex w-full flex-col gap-0 mt-5 justify-center items-center">
            <h1 className="text-4xl max-sm:text-2xl pb-5 tracking-tighter text-black leading-[60px]">Set Rooms Details</h1>
            <SetRoomDetailForm />
        </main>
      </div>
    </>
  )
}

export default Rooms_admin


