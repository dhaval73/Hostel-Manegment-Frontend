import Button from "../Button";

function Header() {
  return (
    <header className="flex flex-col justify-center text-xl text-white">
      <nav className="flex flex-wrap items-center justify-between px-7 py-2 bg-stone-900 max-md:flex-col max-md:px-5">
        <h1 className="self-stretch my-auto text-stone-300" aria-label="Site Title">
          Rk Hostel
        </h1>
        <div className="flex gap-5 my-auto">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            Rooms
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
        </div>
        <Button className="">Sign In</Button>
      </nav>
    </header>
  );
}

export default Header;
