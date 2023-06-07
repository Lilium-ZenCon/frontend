const ConnectWallet = ({walletAddress, setWalletAddress, walletIsConnected, setWalletIsConnected}) => {

  const connect = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Install Metamask");
    } else {
        const accounts = await ethereum.request({
            method: 'eth_requestAccounts',
          });
          setWalletAddress(accounts[0]);
          setWalletIsConnected(true);
    }
  };

  return (
    <button
      type="button"
      className="hover:bg-hover_grey px-4 py-2 rounded-full border-[1px] border-grey transition duration-300 ease-in-out"
      onClick={connect}
    >
        {walletIsConnected? walletAddress : "Connect wallet"}
    </button>
  );
};

export default ConnectWallet;
