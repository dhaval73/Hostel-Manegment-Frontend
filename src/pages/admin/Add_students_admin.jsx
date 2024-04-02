import {AddStudentForm} from '../../components'

function Add_students_admin() {
  return (
    <div className='container flex justify-center  my-14  '>
      <div className=" bg-zinc-300  self-stretch shadow-2xl max-w-[600px] flex flex-col items-center justify-center p-5 px-14   rounded-[50px_0px]">
      <h1 className=' font-bold text-3xl mt-3'>Add Students</h1>
        <AddStudentForm />
      </div>
    </div>
  )
}

export default Add_students_admin