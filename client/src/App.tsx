import { useState } from 'react';
import InputArea from './components/InputArea';
import ResultBox from './components/ResultBox';
import MethodologyModal from './components/MethodologyModal';
import runDetection from './api/runDetection';
import type DetectionResult from './types/result';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDetection = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setResult(null);

    const detectionResult: DetectionResult = await runDetection(inputText);
    setResult(detectionResult);
    setIsLoading(false);
    setInputText('');
  };

  return (
    <div className='min-h-screen bg-black text-green-400 font-mono p-8'>
      {/* Header */}
      <h1 className='text-4xl text-yellow-400 mb-8 tracking-wider border-b border-green-600 pb-2'>
        &gt; Spam E-Mail Classifier
      </h1>

      {/* Input */}
      <InputArea
        inputText={inputText}
        setInputText={setInputText}
        isLoading={isLoading}
        onRun={handleDetection}
      />

      {/* Result */}
      {result && <ResultBox result={result} isLoading={isLoading} />}

      {/* Methodology Button */}
      <div className='mt-12 flex justify-center'>
        <button
          onClick={() => setShowModal(true)}
          className='px-6 py-2 text-lg font-bold uppercase tracking-wider bg-green-900 hover:bg-yellow-400 text-black transition shadow-lg rounded cursor-pointer'
        >
          View Methodology
        </button>
      </div>

      {/* Modal */}
      <MethodologyModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default App;
