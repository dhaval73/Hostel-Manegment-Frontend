import { useEffect, useMemo, useState } from 'react';
import { useTable, usePagination } from 'react-table';
import studentService from '../service/students';
import studentStore from '../store/studentStore';
import { Link } from 'react-router-dom';
import { Button, Input } from './index';

function ShowStudentTable() {
    const { students, setStudents } = studentStore((state) => ({
        students: state.students,
        setStudents: state.setStudents
    }));
    const [search, setSearch] = useState("");
    
    useEffect(() => {
        if (students.length === 0) {
            try {
                (async () => {
                    const res = await studentService.getStudents();
                    if (res) {
                        console.log(res);
                        setStudents(res);
                    }
                })();
            } catch (error) {
                console.log(error);
            }
        }
    }, [students, setStudents]);

    const columns = useMemo(
        () => [
            { Header: 'Sr. No', accessor: (row, index) => index + 1 },
            { Header: 'Name', accessor: 'first_name' },
            { Header: 'Enrollment No', accessor: 'enrollment_number' },
            { Header: 'Room No', accessor: 'room_number' },
            {
                Header: 'Actions',
                accessor: (row) => (
                    <>
                        <Link to={`/delete/${row._id}`} className="text-red-600 focus:outline-none focus:ring focus:ring-red-300">Delete</Link>{" "}
                        <Link to={`/view/${row._id}`} className="text-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">View</Link>
                    </>
                ),
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        nextPage,
        previousPage,
        pageCount,
        gotoPage,
        state: { pageIndex },
    
    } =useTable(
        {
            columns,
            data: students.filter(student =>
                student.first_name.toLowerCase().includes(search.toLowerCase()) ||
                student.enrollment_number.toLowerCase().includes(search.toLowerCase()) ||
                student.room_number.toLowerCase().includes(search.toLowerCase())
            ) || [],
            initialState: { 
                pageIndex: 0,
                 pageSize: 10 
                },
            
        },
       
    );

    return (
        <div>
            <div className="flex justify-end items-center  w-full">
                <div className="">
                    <Input
                        type="search"
                        className=" max-w-48 "
                        placeholder="Search here"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <Button
                    text="Search"
                    className="mb-4 py-1"
                />
            </div>
            <table {...getTableProps()} className='border'>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr key={headerGroup.id} className="bg-white border">
                            {headerGroup.headers.map(column => (
                                <th key={column.id} className="px-3.5 py-3.5 text-2xl tracking-tighter leading-8 text-black whitespace-nowrap border border-zinc-300 ">
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr key={row.id} className="bg-white border">
                                {row.cells.map(cell => (
                                    <td key={cell.id} className="px-4 py-3.5 text-2xl tracking-tighter leading-8 text-black whitespace-nowrap border border-zinc-300">
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="flex items-center justify-between mt-4">
    <div className="flex">
        <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className="px-3 py-1 mr-2 rounded bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-500"
        >
            {'<<'}
        </button>
        <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="px-3 py-1 mr-2 rounded bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-500"
        >
            {'<'}
        </button>
        <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="px-3 py-1 mr-2 rounded bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-500"
        >
            {'>'}
        </button>
        <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            className="px-3 py-1 mr-2 rounded bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-500"
        >
            {'>>'}
        </button>
    </div>
    <span className="text-gray-600">
        Page{' '}
        <strong>
        {pageIndex + 1} of {pageCount || 1}
    </strong>
    </span>
</div>

        </div>
    );
}

export default ShowStudentTable;
