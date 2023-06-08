import Link from 'next/link';


const ConnectWallet = (
  {
    walletAddress,
    setWalletAddress,
    walletIsConnected,
    setWalletIsConnected,
    setIsDropdownOpen,
    isDropdownOpen,
  },
) => {
  const connect = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Install Metamask");
    } else {
      if (!walletIsConnected) {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        setWalletIsConnected(true);
      } else {
        setIsDropdownOpen((prevState) => !prevState);
      }
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="hover:bg-hover_grey px-4 py-2 rounded-full border-[1px] border-grey transition duration-300 ease-in-out"
        onClick={connect}
      >
        {walletIsConnected ? walletAddress : "Connect wallet"}
      </button>
      {isDropdownOpen && (
        <div className="absolute top-11 right-0 bg-white rounded-lg shadow-lg text-right">
          <p className="text-sm font-bold text-grey mb-2 hover:bg-hover_grey p-2 rounded-md cursor-pointer"><Link href="/dashboard">Dashboard</Link></p>
          <p className="text-sm font-bold text-grey mb-2 hover:bg-hover_grey p-2 rounded-md cursor-pointer"><Link href="/swap">Swap tokens</Link></p>
          <p className="text-sm font-bold text-grey hover:bg-hover_grey p-2 rounded-md cursor-pointer"><Link href="/offset">Offset your carbon footprint</Link></p>
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
