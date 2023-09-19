import Hero from '@/components/Hero';
import Image from 'next/image';
import logo from 'public/assets/hero-logo.svg';
import heroPic from 'public/assets/hero-img.svg';
import Leaderboard from '@/components/Leaderboard';
import HowItWorks from '@/components/HowItWorks';

export default function Home() {
    return (
        <div className="w-full overflow-hidden scroll-smooth">
            <Hero id="hero" />
            <Leaderboard id="leaderboard" />
            <HowItWorks id="how-it-works" />
        </div>
    );
}
