export default function Podium({place, company, tokens}) {
    return (
        <div className="flex flex-col justify-center items-center font-bold bg-white relative rounded-xl px-20 py-8">
            <div className="bg-lightgreen rounded-full w-12 h-12 top-3 right-3 absolute text-white flex items-center justify-center text-md">
                {place}
            </div>
            <h3 className="text-2xl text-black">{company}</h3>
            <h5 className="font-semibold">{tokens} tokens retired</h5>
        </div>
    )
}