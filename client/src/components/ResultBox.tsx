import React from 'react';
import type DetectionResult from '../types/result';

interface Props {
  result: DetectionResult;
  isLoading: boolean;
}

const ResultBox: React.FC<Props> = ({ result }) => {
  const resultColor =
    result?.prediction === 'spam' ? 'text-red-500' : 'text-lime-400';

  return (
    <div className='mt-12 p-6 bg-gray-900 border-l-4 border-yellow-400 shadow-xl rounded-lg'>
      <h2 className='text-2xl text-yellow-400 mb-6 tracking-wider'>
        &gt; Analysis Report
      </h2>

      {/* Main Prediction */}
      <div className='flex items-center space-x-4 mb-6'>
        <span className='text-xl text-green-300 font-bold'>
          Classification:
        </span>
        <span
          className={`text-3xl font-extrabold tracking-widest ${resultColor}`}
        >
          {result.prediction[0].toUpperCase() + result.prediction.slice(1, 3)}
          {result.prediction === 'ham' ? ' (legit mail)' : ''}
        </span>
      </div>

      {/* Confidence Bar */}
      <div className='mb-6'>
        <label className='block text-lg mb-2 text-green-300'>
          Confidence ({Math.round(result.accuracy * 100)}%)
        </label>
        <div className='w-full bg-gray-700 rounded h-4 overflow-hidden'>
          <div
            className={`h-4 transition-all duration-1000 ease-out ${
              result.accuracy < 0.5
                ? 'bg-red-600'
                : result.accuracy < 0.8
                ? 'bg-yellow-500'
                : 'bg-green-600'
            }`}
            style={{ width: `${result.accuracy * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ResultBox;
