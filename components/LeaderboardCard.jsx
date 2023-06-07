const LeaderboardCard = ({place, company, tokens}) => {
  return (
    <div className="bg-white text-darkgreen px-20 py-10 rounded-md flex flex-col items-center justify-center relative">
        <h1 className="font-bold text-lg absolute right-2 top-2 bg-lightgreen text-white w-9 h-9 flex justify-center items-center rounded-full">{place}</h1>
        <h3 className="font-bold text-lg">{company}</h3>
        <p>{tokens} tokens retired</p>
        
    </div>
  )
}

export default LeaderboardCard