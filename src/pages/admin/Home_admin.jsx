import { Link } from "react-router-dom";
import { Button, Input } from "../../components";


function Home_admin() {
  const tableData = [
    { srNo: "1", name: "Dhaval", enrollmentNo: "21SOECE11114", roomNo: "520" },
    { srNo: "2", name: "Dhaval", enrollmentNo: "21SOECE11114", roomNo: "520" },
    { srNo: "3", name: "Dhaval", enrollmentNo: "21SOECE11114", roomNo: "520" },
    { srNo: "4", name: "Dhaval", enrollmentNo: "21SOECE11114", roomNo: "520" },
    { srNo: "5", name: "Dhaval", enrollmentNo: "21SOECE11114", roomNo: "520" },
  ];
  return (
    <>
      <div className="flex flex-col px-16 py-12 bg-zinc-50 justify-center items-center">
        <header className="flex flex-col justify-center items-center mt-20 mr-12 max-w-full w-[692px]">
          <h1 className="text-4xl tracking-tighter text-black leading-[60px]">Student Details</h1>
        </header>
        
        <main className="flex flex-col gap-0 mt-5 justify-center items-center">
          <div className="flex justify-center items-center self-end">
            <Input 
            type="search"
            className=""
            placeholder="search here "
            />
            <Button
              text="search"
             className="mb-4 py-1" />
          </div>
          <div className="">
            <table className=' border '>
              <tr className="bg-white border">
                <th className="px-3.5 py-3.5 text-2xl tracking-tighter leading-8 text-black whitespace-nowrap border border-zinc-300 ">Sr. No</th>
                <th className="px-4 py-3.5 text-2xl tracking-tighter leading-8 text-black whitespace-nowrap border border-zinc-300">Name</th>
                <th className="px-4 py-3.5 text-2xl tracking-tighter leading-8 text-black whitespace-nowrap border border-zinc-300">Enrollment No</th>
                <th className="px-3.5 py-3.5 text-2xl tracking-tighter leading-8 text-black whitespace-nowrap border border-zinc-300">Room No</th>
                <th className="px-3.5 py-3.5 text-2xl tracking-tighter leading-8 text-black whitespace-nowrap border border-zinc-300">Actions</th>
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

export default Home_admin

// Row Component
const TableDataRow = ({ srNo, name, enrollmentNo, roomNo }) => (
  <tr className="bg-white border">
    <td className="px-3.5 py-3.5 text-2xl tracking-tighter leading-8 text-black whitespace-nowrap border border-zinc-300 ">{srNo}</td>
    <td className="px-4 py-3.5 text-2xl tracking-tighter leading-8 text-black whitespace-nowrap border border-zinc-300">{name}</td>
    <td className="px-4 py-3.5 text-2xl tracking-tighter leading-8 text-black whitespace-nowrap border border-zinc-300">{enrollmentNo}</td>
    <td className="px-3.5 py-3.5 text-2xl tracking-tighter leading-8 text-black whitespace-nowrap border border-zinc-300">{roomNo}</td>
    <td className="px-4 py-3.5 text-2xl tracking-tighter leading-8 text-indigo-700 whitespace-nowrap border border-zinc-300">
      <Link to={`/delete/${srNo}`} className="text-red-600 focus:outline-none focus:ring focus:ring-red-300">Delete</Link>{" "}
      <Link to={`/view/${srNo}`} className="text-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">View</Link>
    </td>
  </tr>
);
