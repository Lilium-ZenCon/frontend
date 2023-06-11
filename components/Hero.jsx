const Hero = () => {
	return (
		<div id="hero" className="flex my-16 mx-10">
			<div className="flex flex-col justify-center w-[40%]">
				<h5 className="text-sm font-bold text-grey mb-3">Green Trace</h5>
				<h1 className="text-6xl font-bold mb-2 leading-tight">
					Change the
					<br />
					world with
					<br />
					small actions
				</h1>
				<p className="text-md mt-5">
					Explore our revolutionary combination of IoT, AI, and blockchain technologies to tackle critical challenges in the carbon credit market. Green Trace are transparency, trust, and
					accountability to climate action projects and individuals seeking to offset their carbon footprint.
				</p>
			</div>
			<div className="flex flex-col justify-start mt-4 flex-1 ml-12 gap-6">
				<p className="text-md">
					Have peace of mind knowing that the issued carbon credits are guaranteed in quality, with a real and measurable impact. Witness the transformation you are causing on our planet:
					monitor, take action, and make a difference!{' '}
				</p>
				<button
					type="button"
					className="hover:bg-white px-4 py-2 rounded-full border-[1px] border-grey transition duration-300 ease-in-out w-44 font-semibold text-white bg-darkgreen hover:text-grey text-md"
				>
					Learn More
				</button>
			</div>
		</div>
	);
};

export default Hero;
