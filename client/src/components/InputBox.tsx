interface Props {
  inputText: string;
  setInputText: (val: string) => void;
  isLoading: boolean;
  handleDetection: () => void;
  dots: number;
}

const InputBox = ({
  inputText,
  setInputText,
  isLoading,
  handleDetection,
  dots,
}: Props) => {
  return (
    <div className='mb-8'>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows={8}
        className='w-full p-4 bg-gray-900 border-2 border-lime-600 focus:border-amber-400 outline-none resize-none placeholder-lime-700 text-lime-300 transition duration-300 rounded-md shadow-md'
        placeholder='Paste suspicious email here...'
        disabled={isLoading}
      ></textarea>

      <button
        onClick={handleDetection}
        disabled={isLoading || !inputText.trim()}
        className={`mt-4 px-8 py-3 w-full md:w-64 text-lg font-bold uppercase tracking-widest transition duration-300 ease-in-out rounded 
          ${
            isLoading || !inputText.trim()
              ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
              : 'bg-lime-600 hover:bg-amber-500 text-black shadow-lg hover:shadow-amber-400/50'
          }`}
      >
        {isLoading ? `ANALYZING${'.'.repeat(dots)}` : 'RUN DETECTION'}
      </button>
    </div>
  );
};

export default InputBox;
