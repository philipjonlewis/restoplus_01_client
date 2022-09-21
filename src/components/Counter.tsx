import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Counter = ({ isLoading }) => {
  // throw new Error();
  const { countValue } = useSelector((state) => state.count);

  return (
    <div className="flex flex-col justify-center">
      <div className="mx-auto w-full">
        <p className="text-sm mb-2 text-center  bg-blue-500  p-1 px-2 rounded-lg">
          Counter
        </p>
      </div>
      <div className="text-4xl mb-12 border border-blue-500 p-4 rounded-xl font-bold text-center w-48 h-24 flex justify-center items-center">
        {!isLoading ? (
          Number.isInteger(countValue) ? (
            countValue
          ) : (
            countValue.toFixed(2)
          )
        ) : (
          <p className="text-xs">Getting data from server...</p>
        )}
      </div>
    </div>
  );
};

export default Counter;
