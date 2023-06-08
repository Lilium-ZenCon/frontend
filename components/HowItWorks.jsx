import Image from 'next/image'
import howWorksPic from 'public/assets/how-works.svg'


const HowItWorks = () => {
    return (
        <div className='flex flex-row justify-between'>
      <Image
      className='my-[2%] mx-[4%]'
      src={howWorksPic}
      alt="logo"
      width="350"
      height="350"
      />
      <div className='my-[2%] mr-[4%] '>
        <h5 className="text-sm font-bold text-grey mb-1 mt-[4%]">Green Trace</h5>
        <h1 className="text-6xl font-bold mb-2 leading-tight">How it works</h1>
        <p className='my-[1%]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed facilisis diam. Praesent tincidunt lobortis turpis. In vehicula posuere iaculis. Nunc a metus eu turpis ultrices tincidunt sed sed metus. </p>  
        <p className='my-[1%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed facilisis diam. Praesent tincidunt lobortis turpis. In vehicula posuere iaculis. Nunc a metus eu turpis ultrices tincidunt sed sed metus. </p>
        <button type="button" className="hover:bg-white px-4 py-2 rounded-full border-[1px] border-grey transition duration-300 ease-in-out w-44 font-semibold text-white bg-darkgreen hover:text-grey text-md mt-[4%]">Lorem Ipsum</button>
      </div>
      
    </div>
    )
  }
  
  export default HowItWorks