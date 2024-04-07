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
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="/" className="hover:underline">
              Rk Hostel
            </Link>
            . All Rights Reserved.
          </span>
          
        </div>
      </div>
    </footer>

  )
}

export default Footer