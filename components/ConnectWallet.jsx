import { useEffect } from 'react';

const ConnectWallet = ({ walletAddress, setWalletAddress, walletIsConnected, setWalletIsConnected, setIsDropdownOpen, isDropdownOpen, setIsDropdownOpenAdmin, isDropdownOpenAdmin, setIsDropdownOpenCompany, isDropdownOpenCompany }) => {
	const adminWallets = ['0xDa7fc57E480177B87f63f199Db79CF9c5D883280']
	const companyWallets = ['0xDa7fc57E480177B87f63f199Db79CF9c5D883289']

	const connect = async () => {
		const { ethereum } = window;
		if (ethereum) {
			if (!walletIsConnected) {
				const accounts = await ethereum.request({
					method: 'eth_requestAccounts',
				});
				setWalletAddress(accounts[0]);
				setWalletIsConnected(true);
			} else {
				for (var i = 0; i < adminWallets; i++){
					if (adminWallets[i].toLowerCase() == walletAddress) {
						setIsDropdownOpenAdmin((prevState) => !prevState);
						break
					} if (companyWallets[i].toLowerCase() == walletAddress){
						setIsDropdownOpenCompany((prevState) => !prevState);
						break
					} else {
						setIsDropdownOpen((prevState) => !prevState);
						break
					}
				}

			}
		}
	};

	const handleLinkClick = (path) => {
		window.location.href = path;
	};

	useEffect(() => {
		connect();
	}, []);

	return (
		<div className="relative">
			<button type="button" className="hover:bg-hover_grey px-4 py-2 rounded-full border-[1px] border-grey transition duration-300 ease-in-out" onClick={connect}>
				{walletIsConnected ? 'Connected wallet: ' + walletAddress.substring(0, 6) + '...' + walletAddress.substring(38, 42) : 'Connect wallet'}
			</button>
			{isDropdownOpen  &&  (
				<div className="absolute top-11 right-0 bg-white rounded-lg shadow-lg text-right z-10">
					<p className="text-sm font-bold text-grey mb-2 hover:bg-hover_grey p-2 rounded-md cursor-pointer" onClick={() => handleLinkClick('/dashboard')}>
						Dashboard
					</p>
					<p className="text-sm font-bold text-grey mb-2 hover:bg-hover_grey p-2 rounded-md cursor-pointer" onClick={() => handleLinkClick('/swap')}>
						Swap tokens
					</p>
					<p className="text-sm font-bold text-grey hover:bg-hover_grey p-2 rounded-md cursor-pointer" onClick={() => handleLinkClick('/offset')}>
						Offset your carbon footprint
					</p>
					
				</div>
			)}
			{isDropdownOpenAdmin  &&  (
				<div className="absolute top-11 right-0 bg-white rounded-lg shadow-lg text-right z-10">
					<p className="text-sm font-bold text-grey mb-2 hover:bg-hover_grey p-2 rounded-md cursor-pointer" onClick={() => handleLinkClick('/dashboard')}>
						Dashboard
					</p>
					<p className="text-sm font-bold text-grey mb-2 hover:bg-hover_grey p-2 rounded-md cursor-pointer" onClick={() => handleLinkClick('/swap')}>
						Swap tokens
					</p>
					<p className="text-sm font-bold text-grey hover:bg-hover_grey p-2 rounded-md cursor-pointer" onClick={() => handleLinkClick('/offset')}>
						Offset your carbon footprint
					</p>
					<p className="text-sm font-bold text-grey mb-2 hover:bg-hover_grey p-2 rounded-md cursor-pointer" onClick={() => handleLinkClick('/admin')}>
						Admin area
					</p>
					
				</div>
			)}
			{isDropdownOpenCompany  &&  (
				<div className="absolute top-11 right-0 bg-white rounded-lg shadow-lg text-right z-10">
					<p className="text-sm font-bold text-grey mb-2 hover:bg-hover_grey p-2 rounded-md cursor-pointer" onClick={() => handleLinkClick('/dashboard')}>
						Dashboard
					</p>
					<p className="text-sm font-bold text-grey mb-2 hover:bg-hover_grey p-2 rounded-md cursor-pointer" onClick={() => handleLinkClick('/swap')}>
						Swap tokens
					</p>
					<p className="text-sm font-bold text-grey hover:bg-hover_grey p-2 rounded-md cursor-pointer" onClick={() => handleLinkClick('/offset')}>
						Offset your carbon footprint
					</p>
					<p className="text-sm font-bold text-grey mb-2 hover:bg-hover_grey p-2 rounded-md cursor-pointer " onClick={() => handleLinkClick('/company')}>
						Withdraw
					</p>
					
				</div>
			)}
		</div>
	);
};

export default ConnectWallet;
