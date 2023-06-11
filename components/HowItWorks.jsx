import Image from 'next/image';
import howWorksPic from 'public/assets/how-works.svg';

const HowItWorks = () => {
	return (
		<div className="flex flex-row justify-between" id="how-it-works">
			<Image className="my-[2%] mx-[4%]" src={howWorksPic} alt="logo" width="400" height="400" />

			<div className="my-[2%] mr-[4%] ">
				<h5 className="text-sm font-bold text-grey mb-1 mt-[4%]">Green Trace</h5>
				<h1 className="text-6xl font-bold mb-2 leading-tight">How it works</h1>
				<p className="my-[1%]">
					Discover the most incredible way to save the planet! With Green Trace, credit carbon emitting companies can monitor the temperature and humidity in their forest reserves through
					state-of-the-art IoT devices. And you know what's even cooler? We use artificial intelligence to check if the data falls within the ideal parameters for the region. If they do,
					it's time to celebrate! We issue carbon credit tokens to recognize your amazing actions. Now we're truly talking about making a difference!
				</p>
				<p className="my-[1%]">
					But we don't stop there. For you, user, we offer a unique journey. Calculate the amount of carbon you need to offset based on your daily activities. Be an environmental superhero!
					Purchase our carbon credit tokens, issued by partner companies, and track your progress on a personalized dashboard. See how every step you take helps protect our planet. It's time
					to show the world the power of your contribution!
				</p>
				<p className="my-[1%]">Join us and be part of this green revolution. Together, we can make a difference!</p>
				<button
					type="button"
					className="hover:bg-white px-4 py-2 rounded-full border-[1px] border-grey transition duration-300 ease-in-out w-44 font-semibold text-white bg-darkgreen hover:text-grey text-md mt-[4%]"
				>
					Learn more
				</button>
			</div>
		</div>
	);
};

export default HowItWorks;
