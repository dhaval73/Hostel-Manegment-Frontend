import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900 w-full">
      <div className="mx-auto w-full max-w-screen-xl p-1 py-1 lg:py-3 text-center">
       
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-center w-full text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="/admin" className="hover:underline">
              Rk Hostel™
            </Link>
            . All Rights Reserved.
          </span>          
        </div>
      </div>
    </footer>

  )
}

export default Footer