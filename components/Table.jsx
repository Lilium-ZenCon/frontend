const Table = () => {
  const data = [
    {
      id: 1,
      company: {
        name: 'Gerdau',
        logo: 'https://media.licdn.com/dms/image/C4D0BAQFOflmqo6o0Zw/company-logo_200_200/0/1657129848248?e=2147483647&v=beta&t=ye07zO-CeE4C1yHlnzZVoRLI-haSpHxwdgOm-zXEUMs',
        type: 'Steel',
      },
      tokens: 100,
      status: 'Active',
    },
    {
      id: 2,
      company: {
        name: 'Company B',
        logo: 'https://example.com/logo2.png',
        type: 'Type B',
      },
      tokens: 200,
      status: 'Inactive',
    },
    // Add more data objects as needed
  ];

  return (
    <table className="w-full bg-white rounded-md">
      <thead className="rounded-md">
        <tr className="text-left rounded-md">
          <th className="py-3 px-6 bg-gray-100 font-semibold uppercase text-sm text-gray-600 border-b border-gray-300">
            Company
          </th>
          <th className="py-3 px-6 bg-gray-100 font-semibold uppercase text-sm text-gray-600 border-b border-gray-300">
            Retired Tokens
          </th>
          <th className="py-3 px-6 bg-gray-100 font-semibold uppercase text-sm text-gray-600 border-b border-gray-300">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="py-4 px-6 border-b border-gray-300">
              <div className="flex items-center">
                <img
                  src={item.company.logo}
                  alt={item.company.name}
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <div className="text-gray-900 font-medium">{item.company.name}</div>
                  <span className="text-gray-500 text-xs">{item.company.type}</span>
                </div>
              </div>
            </td>
            <td className="py-4 px-6 border-b border-gray-300">{item.tokens}</td>
            <td className="py-4 px-6 border-b border-gray-300">{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
