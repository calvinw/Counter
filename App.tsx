
import React, { useState, useCallback } from 'react';

const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const MinusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
  </svg>
);

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-800 rounded-2xl shadow-2xl p-8 text-center transition-transform transform hover:scale-105 duration-300">
        <h1 className="text-3xl font-bold text-indigo-400 mb-2">Counter</h1>
        <p className="text-slate-400 mb-8">A simple counter built with React & Tailwind</p>
        
        <div className="bg-slate-900 rounded-lg p-6 mb-8">
          <p 
            className="text-8xl font-mono font-bold text-white tracking-tighter"
            aria-live="polite"
          >
            {count}
          </p>
        </div>

        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={decrement}
            aria-label="Decrement counter"
            className="group w-20 h-20 bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/50 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
          >
            <MinusIcon className="h-10 w-10 text-white transition-transform duration-300 group-hover:scale-110" />
          </button>

          <button
            onClick={increment}
            aria-label="Increment counter"
            className="group w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/50 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            <PlusIcon className="h-10 w-10 text-white transition-transform duration-300 group-hover:scale-110" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
