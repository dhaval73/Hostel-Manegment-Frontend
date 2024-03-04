import { Link } from "react-router-dom";
import { Button, Input } from "../../components";


function Rooms_admin() {
  const tableData = [
    { srNo: "1", name: "Dhaval", enrollmentNo: "21SOECE11114" },
    { srNo: "2", name: "Dhaval", enrollmentNo: "21SOECE11114" },
    { srNo: "3", name: "Dhaval", enrollmentNo: "21SOECE11114" },

  ];
  return (
    <>
      <div className="flex flex-col px-16 py-12 bg-zinc-50 justify-center items-center">

        <main className="flex flex-col gap-0 mt-5 justify-center items-center">
        <div className="flex flex-col justify-center items-center my-10 mr-12 max-w-full w-[692px]">
          <h1 className="text-4xl tracking-tighter text-black leading-[60px]">Rooms Details</h1>
        </div>
          <div className="flex gap-2 justify-center items-center self-end">
            <Input
              label="Room No"
              className=""
              placeholder="520"
            />
            <Input
            label="Set Sering type"
              className=""
              placeholder="4"
            />
            <Button
              text="search"
              className=" text-2xl" />
          </div>
        <div className="flex flex-col justify-center items-center my-10 mr-12 max-w-full w-[692px]">
          <h1 className="text-4xl tracking-tighter text-black leading-[60px]">Rooms Details</h1>
        </div>
          <div className="flex justify-center items-center self-end">
            <Input
              type="search"
              className=""
              placeholder="search here "
            />
            <Button
              text="search"
              className="mb-4  text-2xl" />
          </div>
          <div className=" w-full">
            <table className=' border w-full'>
              <tr className="bg-white border text-left">
                <th className="px-3.5 py-3.5 text-2xl tracking-tighter leading-8 text-black whitespace-nowrap border border-zinc-300 ">Sr. No</th>
                <th className="px-4 py-3.5 text-2xl tracking-tighter leading-8 text-black whitespace-nowrap border border-zinc-300">Name</th>
                <th className="px-4 py-3.5 text-2xl tracking-tighter leading-8 text-black whitespace-nowrap border border-zinc-300">Enrollment No</th>
                <th className="px-3.5 py-3.5 text-2xl tracking-tighter leading-8 text-black whitespace-nowrap border border-zinc-300">Room No</th>
              </tr>
              {tableData.map((data, index) => (
                <TableDataRow key={index} {...data} />
              ))}
            </table>
          </div>
        </main>
      </div>
    </>
  )
}

export default Rooms_admin

// Row Component
const TableDataRow = ({ srNo, name, enrollmentNo }) => (
  <tr className="bg-white border">
    <td className="px-3.5 py-3.5 text-2xl tracking-tighter leading-8 text-black whitespace-nowrap border border-zinc-300 ">{srNo}</td>
    <td className="px-4 py-3.5 text-2xl tracking-tighter leading-8 text-black whitespace-nowrap border border-zinc-300">{name}</td>
    <td className="px-4 py-3.5 text-2xl tracking-tighter leading-8 text-black whitespace-nowrap border border-zinc-300">{enrollmentNo}</td>
    <td className="px-4 py-3.5 text-2xl tracking-tighter leading-8 text-indigo-700 whitespace-nowrap border border-zinc-300">
      <Link to={`/delete/${srNo}`} className="text-red-600 focus:outline-none focus:ring focus:ring-red-300">Delete</Link>{" "}
      <Link to={`/view/${srNo}`} className="text-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">View</Link>
    </td>
  </tr>
);
