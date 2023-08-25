import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li className="font-bold">
          <Link className="text-2xl" href="#">
            Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
