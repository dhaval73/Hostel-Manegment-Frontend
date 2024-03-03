import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900 w-full">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">

            <Link to="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                RK Hostel
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Quick Links
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link to="/rooms" className="hover:underline">
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link to="/contect" className="hover:underline">
                    Contect US
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contect Us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    to="https://maps.app.goo.gl/9G8acWJaNfsZVig18"
                    className="hover:underline flex flex-row items-center"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 8.75C10.6904 8.75 11.25 8.19036 11.25 7.5C11.25 6.80964 10.6904 6.25 10 6.25C9.30964 6.25 8.75 6.80964 8.75 7.5C8.75 8.19036 9.30964 8.75 10 8.75Z" fill="#CCCCCC" />
                      <path d="M10 1.25C6.55391 1.25 3.75 3.93164 3.75 7.22656C3.75 8.7957 4.46523 10.8824 5.87578 13.4289C7.00859 15.4734 8.31914 17.3223 9.00078 18.2422C9.11596 18.3994 9.26656 18.5272 9.44037 18.6153C9.61418 18.7034 9.8063 18.7493 10.0012 18.7493C10.196 18.7493 10.3882 18.7034 10.562 18.6153C10.7358 18.5272 10.8864 18.3994 11.0016 18.2422C11.682 17.3223 12.9938 15.4734 14.1266 13.4289C15.5348 10.8832 16.25 8.79648 16.25 7.22656C16.25 3.93164 13.4461 1.25 10 1.25ZM10 10C9.50555 10 9.0222 9.85338 8.61107 9.57867C8.19995 9.30397 7.87952 8.91352 7.6903 8.45671C7.50108 7.99989 7.45157 7.49723 7.54804 7.01227C7.6445 6.52732 7.8826 6.08186 8.23223 5.73223C8.58186 5.3826 9.02732 5.1445 9.51227 5.04804C9.99723 4.95157 10.4999 5.00108 10.9567 5.1903C11.4135 5.37952 11.804 5.69995 12.0787 6.11107C12.3534 6.5222 12.5 7.00555 12.5 7.5C12.4993 8.16282 12.2357 8.79828 11.767 9.26697C11.2983 9.73565 10.6628 9.99928 10 10Z" fill="#CCCCCC" />
                    </svg>
                    <p className='pl-1 max-w-40'>
                       Rk University , Rajkot - 361006
                      
                    </p>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link

                    className="hover:underline flex flex-row items-center"
                  >
                    <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.987 1.06598C4.42458 0.934045 4.89415 0.955963 5.31754 1.12808C5.74093 1.30021 6.0926 1.61215 6.314 2.01198L6.388 2.16098L7.05 3.63198C7.25091 4.07846 7.31613 4.57416 7.23754 5.05741C7.15895 5.54067 6.94003 5.99016 6.608 6.34998L6.475 6.48198L5.432 7.45498C5.244 7.63298 5.385 8.32198 6.065 9.49998C6.677 10.56 7.175 11.055 7.42 11.082H7.463L7.516 11.072L9.566 10.445C9.84151 10.3605 10.1355 10.3571 10.4129 10.4353C10.6903 10.5136 10.9392 10.67 11.13 10.886L11.221 11.001L12.578 12.881C12.8439 13.2495 12.9765 13.6975 12.9538 14.1514C12.931 14.6053 12.7544 15.0379 12.453 15.378L12.331 15.504L11.789 16.018C11.3023 16.4789 10.6935 16.7904 10.0349 16.9153C9.37633 17.0403 8.69573 16.9736 8.074 16.723C6.139 15.943 4.381 14.161 2.784 11.395C1.184 8.62198 0.519001 6.20498 0.816001 4.13498C0.905875 3.50924 1.16354 2.91953 1.56164 2.42847C1.95973 1.93741 2.48339 1.56334 3.077 1.34598L3.27 1.28198L3.987 1.06598Z" fill="#CCCCCC" />
                    </svg>

                    <p className='pl-1 max-w-40'>
                      91+ 9408x xxxxx
                    </p>
                  </Link>
                </li>

              </ul>
            </div>
          
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Dribbble account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer