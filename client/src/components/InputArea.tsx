// components/InputArea.tsx
import React, { useEffect, useState } from 'react';

interface Props {
  inputText: string;
  setInputText: (v: string) => void;
  isLoading: boolean;
  onRun: () => void;
}

const InputArea: React.FC<Props> = ({
  inputText,
  setInputText,
  isLoading,
  onRun,
}) => {
  // local dots state to animate "ANALYZING." "ANALYZING.." "ANALYZING..."
  const [dots, setDots] = useState(1);

  // focus state to show the fake blinking block cursor when the textarea is focused & empty

  useEffect(() => {
    if (!isLoading) {
      setDots(1);
      return;
    }
    const interval = setInterval(() => {
      setDots((prev) => (prev === 3 ? 1 : prev + 1));
    }, 500);
    return () => clearInterval(interval);
  }, [isLoading]);

  const disabled = isLoading || !inputText.trim();

  return (
    <div className='mb-8 relative'>
      {/* wrapper is relative so we can absolutely position the fake cursor */}
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows={10}
        style={{}} // terminal-like caret color
        className='
          w-full p-4 bg-gray-900 border border-green-600 focus:border-yellow-400
          outline-none resize-none placeholder-green-700 text-green-300
          transition duration-300 shadow-lg rounded
          font-mono caret-green-300
        '
        placeholder='Paste the suspicious content here...'
        disabled={isLoading}
        aria-label='Email content'
      ></textarea>

      {/* Fake blinking block cursor (only shown when focused and empty) */}

      <div className='mt-4'>
        <button
          onClick={onRun}
          disabled={disabled}
          className={`px-8 py-3 text-lg font-bold uppercase tracking-widest w-full rounded transition duration-300
            ${
              disabled
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-lime-600 hover:bg-amber-400 text-black shadow-lg'
            }`}
        >
          {isLoading ? `ANALYZING${'.'.repeat(dots)}` : 'RUN DETECTION'}
        </button>
      </div>
    </div>
  );
};

export default InputArea;
