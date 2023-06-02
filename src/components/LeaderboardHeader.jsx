export default function LeaderboardHeader() {
  return (
    <div className="navbar bg-darkgreen text-white">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-3xl">All companies</a>
      </div>
      <div className="flex gap-6">
        <div className="form-control flex flex-row gap-4">
          <input
            type="text"
            className="input input-bordered w-64 h-8 rounded-full text-grey"
          />
          <button className="rounded-full bg-lightgreen px-7">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
