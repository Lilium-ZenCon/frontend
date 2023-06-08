import Image from "next/image"
import nft from "../public/assets/nft.jpg"

const NFTCarousel = () => {

    const NFTs = [nft, nft, nft, nft, nft, nft, nft, nft, nft, nft, nft, nft, nft, nft, nft, nft, nft, nft]
  return (
    <div className="carousel carousel-center w-full p-6 pb-8 space-x-4 bg-white shadow-lg rounded-box">
        {NFTs.map((item, index) => (
            <div class="tooltip tooltip-bottom z-20" data-tip="NFT">
                <div className="carousel-item w-[70px] h-[70px]">
                    <Image src={nft} width={70} height={70} className="rounded-box" />
                </div> 
            </div>
        ))}

</div>
  )
}

export default NFTCarousel