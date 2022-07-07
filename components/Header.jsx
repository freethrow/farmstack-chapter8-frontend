import Link from "next/link";

const Header = () => {
  return (
    <div className=" text-orange-600 py-2 font-bold flex flex-row justify-between items-center">
      <div>
        <Link href="/">
          <a>FARM Cars</a>
        </Link>
      </div>
      <ul className="flex flex-row space-x-4 ">
        <li>
          <Link href="/cars">
            <a>Cars</a>
          </Link>
        </li>
        <li>
          <Link href="/cars/add">
            <a>Add Car</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/account/register">
            <a>Register</a>
          </Link>
        </li>
        <li>
          <Link href="/account/login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/account/logout">
            <a>Log out</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
