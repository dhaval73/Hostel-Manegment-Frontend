import { EditStudentForm} from '../../components'

function Edit_student() {
  return (
    <div className='container flex justify-center  my-14  '>
      <div className=" bg-zinc-300  self-stretch shadow-2xl max-w-[600px] flex flex-col items-center justify-center p-5 px-14   rounded-[50px_0px]">
      <h1 className=' font-bold text-3xl mt-3'> Students</h1>
        <EditStudentForm />
      </div>
    </div>
  )
}

export default Edit_student