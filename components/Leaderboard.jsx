import LeaderboardCard from "./LeaderboardCard";
import Table from "./Table";

const Leaderboard = () => {
  const leaderboardCards = [
    { company: "Company 1", tokens: 100 },
    { company: "Company 2", tokens: 200 },
    { company: "Company 3", tokens: 300 },
  ];

  return (
    <div className="bg-darkgreen w-full min-h-screen px-10">
      <div className="pt-20 text-white w-[40%]">
        <h1 className="text-6xl font-bold">
          Leaderboard
        </h1>
        <p className="text-md mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sed facilisis diam. Praesent tincidunt lobortis turpis. In vehicula
          posuere iaculis. Nunc a metus eu turpis ultrices tincidunt sed sed
          metus.
        </p>
      </div>
      <div className="flex gap-5 justify-between w-full mt-8">
        {leaderboardCards.slice(0, 3).map((card, index) => {
          return (
            <LeaderboardCard
              key={index}
              place={index + 1}
              company={card.company}
              tokens={card.tokens}
            />
          );
        })}
      </div>
      <div className="py-10">
        <Table/>
      </div>
    </div>
  );
};

export default Leaderboard;
