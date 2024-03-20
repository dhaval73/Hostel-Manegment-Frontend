import {Input ,Radio,Button, Textarea} from "./index"

export function ContactForm() {  
  return (
    <form className="container flex flex-col h-full py-14 ">
      <div className=" grid gap-x-10 grid-cols-2  w-full  ">
          <Input label="First name" placeholder="Dhaval Dharaviya" />
          <Input label="Last name" placeholder="Dhaval Dharaviya" />
          <Input label="Email" type="email" placeholder="Dhaval Dharaviya" />
          <Input label="Mobile no" type="number" placeholder="Dhaval Dharaviya" />          
      </div>
     
      <div className="flex flex-col my-5">
        <p className=" text-black font-bold">Select inquiry type ?</p>
      <div className=" flex flex-row gap-5  w-full  ">
        <Radio name="inquiry_type" label="Generel Inquiry" />   
        <Radio name="inquiry_type" label="Hostel Inquiry" />   
        <Radio name="inquiry_type" label="Mess Inquiry" />    
      </div>
      </div>
      <div className="">
      <Textarea className=" resize-none" type="textarea" label="Message" placeholder="i want to inform"  />            
      </div>
      <div className="flex justify-end ">
      <Button className="" color='zinc' />
      </div>
    </form>
  );
}



export default ContactForm