import Hero from "../components/Hero";
import Leaderboard from "../components/Leaderboard";
import NavBar from "../components/NavBar";

export default function Home() {
    return (
        <div className="w-full">
            <NavBar/>
            <Hero/>
            <Leaderboard/>
        </div>
    )
}