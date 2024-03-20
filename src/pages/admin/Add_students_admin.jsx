import { Input ,Button, Textarea} from '../../components'

function Add_students_admin() {
  return (
    <div className='container flex justify-center  my-14'>
      <div className=" max-w-[600px] flex flex-col items-center justify-center p-5 px-14  bg-zinc-200 rounded-[50px_0px]">
      <h1 className=' font-bold text-3xl mt-3'>Add Students</h1>
      <form className='mt-5 justify-center items-center flex flex-col' >
        <Input label='First Name' />
        <Input label='Last Name' />
        <Input label='Enrollment No' />
        <Input type="number" label='Mobile Number' />
        <Input label='Room number' />
        <Input type="date" label='Date Of Birth' className="" />
        <Textarea label='Address' />
        <Button color="zinc" className="px-6" />
      </form>
      </div>
    </div>
  )
}

export default Add_students_admin