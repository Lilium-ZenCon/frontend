import logo from '../assets/logo.svg';

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 font-montserrat gap-5">
      <div className="flex-none">
        <button>
          <img className="w-16" src={logo}/>
        </button>
      </div>
      <div className="flex-1 text-xl text-grey gap-5">
        <a className="btn btn-ghost normal-case font-bold">Home</a>
        <a className="btn btn-ghost normal-case font-bold">Leaderboard</a>
        <a className="btn btn-ghost normal-case font-bold">Features</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-ghost border-[1px] border-grey rounded-3xl px-9 py-0 normal-case text-grey">
          Login
        </button>
      </div>
    </div>
  );
}
