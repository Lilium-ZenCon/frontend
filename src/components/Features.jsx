import photos from '../assets/features-photos.png';

export default function Features() {
  return (
    <div className="bg-white flex items-start justify-center gap-16 p-16 mr-16">
      <img src={photos} className='flex-3'></img>
      <div className='flex-1'>
        <h4 className="text-grey font-semibold mb-2 mt-10">Carbon Verifier</h4>

        <h1 className="text-6xl font-bold text-black leading-[65px] mb-8">
        Building a better future
        </h1>
        <div className="text-md">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed facilisis diam. Praesent tincidunt lobortis turpis. In vehicula posuere iaculis. Nunc a metus eu turpis ultrices tincidunt sed sed metus. </p>
                <button className="mt-6 bg-darkgreen rounded-full px-6 py-1 text-white font-semibold hover:text-black btn btn-ghost normal-case text-md">Lorem ipsum</button>
            </div>
      </div>
    </div>
  );
}
