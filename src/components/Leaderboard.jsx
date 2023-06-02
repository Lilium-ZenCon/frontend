import LeaderboardHeader from "./LeaderboardHeader";
import Podium from "./Podium";

export default function Leaderboard() {
    return (
        <div className="min-h-screen bg-darkgreen px-12 pt-10">
            <h1 className="text-6xl font-bold text-white leading-[65px] mb-10">Leaderboard</h1>
            <p className="mt-2 text-white w-[28rem] text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed facilisis diam. Praesent tincidunt lobortis turpis.</p>
            <div className="flex justify-between my-8">
                <Podium place={'1st'} company={"Gerdau"} tokens={27000}/>
                <Podium place={'2nd'} company={"Gerdau"} tokens={27000}/>
                <Podium place={'3rd'} company={"Gerdau"} tokens={27000}/>
            </div>
            <LeaderboardHeader/>
        </div>
    )
}