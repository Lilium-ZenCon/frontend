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
        <li className="list-none gap-14 flex items-center scroll-smooth	">
          <a className="hover:bg-hover_grey rounded-lg py-2 px-4 transition duration-300 ease-in-out" href="#">Home</a>
          <a className="hover:bg-hover_grey rounded-lg py-2 px-4 transition duration-300 ease-in-out" href="#leaderboard">Leaderboard</a>
          <a className="hover:bg-hover_grey rounded-lg py-2 px-4 transition duration-300 ease-in-out" href="#">How it works</a>
        </li>
      </span>
      <button type="button" className="hover:bg-hover_grey px-4 py-2 rounded-full border-[1px] border-grey transition duration-300 ease-in-out">Connect wallet</button>
    </div>
  );
};

export default NavBar;
