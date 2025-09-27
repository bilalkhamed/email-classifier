const DetailsTable = () => {
  return (
    <div className='mt-6 overflow-x-auto'>
      <table className='table-auto w-full border border-green-700 text-green-300 text-sm'>
        <thead className='bg-gray-800 text-yellow-400'>
          <tr>
            <th className='px-4 py-2 border border-green-700'>Class</th>
            <th className='px-4 py-2 border border-green-700'>Precision</th>
            <th className='px-4 py-2 border border-green-700'>Recall</th>
            <th className='px-4 py-2 border border-green-700'>F1-Score</th>
            <th className='px-4 py-2 border border-green-700'>Support</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='px-4 py-2 border border-green-700'>Spam</td>
            <td className='px-4 py-2 border border-green-700'>0.91</td>
            <td className='px-4 py-2 border border-green-700'>0.87</td>
            <td className='px-4 py-2 border border-green-700'>0.89</td>
            <td className='px-4 py-2 border border-green-700'>250</td>
          </tr>
          <tr>
            <td className='px-4 py-2 border border-green-700'>Ham</td>
            <td className='px-4 py-2 border border-green-700'>0.95</td>
            <td className='px-4 py-2 border border-green-700'>0.97</td>
            <td className='px-4 py-2 border border-green-700'>0.96</td>
            <td className='px-4 py-2 border border-green-700'>400</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailsTable;
