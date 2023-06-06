import Image from "next/image";
import logo from "../public/assets/icon.svg";

const NavBar = () => {
  return (
    <div className="flex justify-between font-semibold text-grey items-center my-6 mx-10 font-montserrat">
      <span className="flex justify-between items-center gap-14">
        <Image
          src={logo}
          alt="logo"
          width="50"
          height="50"
        />
        <li className="list-none gap-14 flex items-center">
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
        </li>
      </span>
      <button type="button" className="hover:bg-dark_grey">Connect</button>
    </div>
  );
};

export default NavBar;
