import  { useState } from 'react';
import { NavLink,useNavigate  } from 'react-router-dom';
import Button from '../../Button';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate()
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white dark:bg-zinc-900 sticky w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Rk Hostel
                </span>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Button
                        type="button"
                        color="green"
                        onClick={()=>navigate("admin/login")}
                    >
                        Sign in
                    </Button>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-zinc-700 dark:focus:ring-gray-600"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`${
                        isMenuOpen ? 'block' : 'hidden'
                    } items-center justify-between w-full md:flex md:w-auto md:order-1`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-zinc-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-zinc-800 md:dark:bg-zinc-900 dark:border-gray-700">
                        <li>
                            <NavLink
                                to="admin/"
                                className={({ isActive }) =>
                                    `block py-2 px-3 text-white   rounded md:bg-transparent md:p-0 ${
                                        isActive && 'border-b-2 border-blue-700 bg-blue-700 00  '
                                    }`
                                }
                                
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="admin/add_student"
                                className={({ isActive }) =>
                                    ` block py-2 px-3 text-gray-900 rounded hover:bg-zinc-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                                        isActive && 'border-b-2 border-blue-700 '
                                    }`
                                }
                            >
                                Add Students
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="admin/rooms"
                                className={({ isActive }) =>
                                    `block py-2 px-3 text-gray-900 rounded hover:bg-zinc-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                                        isActive ? 'border-b-2 border-blue-700' : ''
                                    }`
                                }
                            >
                                Rooms
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
