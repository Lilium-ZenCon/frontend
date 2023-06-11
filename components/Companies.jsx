import Image from 'next/image';
import { useState } from 'react';

const Company = (showModal, company) => {
    return (
        <button
            className="bg-white rounded-lg shadow-xl w-[184px] h-52 text-darkgreen border-4 border-red-500 hover:bg-slate-200 transition duration-300 ease-in-out"
            onClick={() => window.company_modal.showModal(company)}
        >
            <div className="flex justify-center">
                <Image
                    src={company.image}
                    width={56}
                    height={44}
                    className="rounded-full"
                />
            </div>
            <div className="mx-2 mt-2">
                <p className="font-bold text-sm">Company</p>
                <p className="text-xs">{company.name}</p>
            </div>
            <div className="my-2  mx-2">
                <p className="font-bold text-sm">Emitted tokens</p>
                <p className="text-xs">{company.tokens}</p>
            </div>
            <div className="my-2 mx-2">
                <p className="font-bold text-sm">Status</p>
                <p className="text-xs">{company.status}</p>
            </div>
        </button>
    );
};

const Companies = () => {
    const [companies, setCompanies] = useState([
        {
            name: 'Alberta Carbon Trunk Line',
            tokens: 14000,
            status: 'Active',
            image: 'assets/nft.jpg'
        }
    ]);

    return (
        <div className="flex flex-wrap justify-around py-4">
            {companies.map((company, index) => (
                <Company key={index} company={company} />
            ))}
        </div>
    );
};

export default Companies;
