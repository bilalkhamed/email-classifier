import React from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
}

const MethodologyModal: React.FC<Props> = ({ open, onClose }) => {
  return (
    <div>
      {open && (
        <div
          className='min-w-screen min-h-screen absolute inset-0 bg-black/30 backdrop-blur-xl flex items-center justify-center z-50'
          onClick={onClose}
        >
          <div
            className='bg-gray-900 text-green-300 p-6 rounded-2xl w-full max-w-2xl font-mono text-sm'
            onClick={(e: any) => e.stopPropagation()}
          >
            <h2 className='text-yellow-400 text-xl mb-4'>{'> Methodology'}</h2>
            <p className='mb-4'>
              Our spam classifier is trained on labeled emails to distinguish
              between ham (legitimate emails) and spam.
            </p>
            <p className='mb-4'>
              Text is preprocessed and vectorized using a CountVectorizer,
              converting each word into a numerical feature.
            </p>
            <p className='mb-4'>
              A Multinomial Naive Bayes model is then applied to predict and
              classify new text.
            </p>
            <p className='mb-4'>
              The system is deployed with a FastAPI backend and a React frontend
              for seamless text input and real-time results.
            </p>

            <h3 className='text-xl text-yellow-400 mb-3 mt-6'>
              {'>'} Technologies & Libraries
            </h3>
            <ul className='list-disc list-inside text-green-300 text-sm mb-4'>
              <li>Frontend: React, TypeScript, TailwindCSS, Axios</li>
              <li>Backend: FastAPI, Uvicorn</li>
              <li>
                Machine Learning: scikit-learn (CountVectorizer, MultinomialNB)
              </li>
              <li>Data Handling: pandas, numpy</li>
              <li>
                Dataset:{' '}
                <a href='https://www.kaggle.com/code/mfaisalqureshi/email-spam-detection-98-accuracy/input'>
                  FAISAL QURESHI on Kaggle
                </a>
              </li>
            </ul>

            <div className='mt-6 flex justify-end'>
              <button
                onClick={onClose}
                className='px-4 py-2 bg-green-600 text-black font-bold rounded hover:bg-yellow-400 transition cursor-pointer'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MethodologyModal;
