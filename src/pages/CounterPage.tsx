import React, { useState, useEffect, Suspense } from 'react';
import Counter from '../components/Counter';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { config } from '../config';

import {
  countIncrement,
  countDecrement,
  setCounterCount,
} from '../store/countState';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import axios from 'axios';

const CountDisplayComponent = React.lazy(() => import('../components/Counter'));
const CounterPage = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { countValue } = useSelector((state) => state.count);

  useEffect(() => {
    const getCookieId = async () => {
      const { data: cookieData } = await axios.get(
        `${config.backendURL}restoplus/api_v1/cookie_id`
      );

      if (cookieData.code == 200) {
        Cookies.set('cookie_id', cookieData.cookie_id);
      }
    };

    const getCountData = async () => {
      const { data: countData } = await axios.get(
        `${config.backendURL}restoplus/api_v1/count_value?_id=${Cookies.get(
          'cookie_id'
        )}`
      );

      if (countData.code == 200) {
        dispatch(setCounterCount(Number(countData.payload.count_value)));
        setIsLoading(false);
      }
    };

    if (!Cookies.get('cookie_id')) {
      getCookieId();
    } else {
      getCountData();
    }
    dispatch(setCounterCount(0));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    postData(countValue);
  }, [countValue]);

  const postData = async (count_value: number) => {
    const response = await axios.post(
      `${config.backendURL}restoplus/api_v1/count_value`,
      {
        _id: Cookies.get('cookie_id'),
        count_value: count_value,
      }
    );

    if (response.status !== 200) {
      toast.error('Something is wrong with the server, please refresh!');
    }
  };

  const handleChange = (event: { target: { value: number } }) => {
    const value = event.target.value;
    setValue(Number(value));
  };

  const incrementCount = (e) => {
    e.preventDefault();
    dispatch(countIncrement(value));
    toast.success(`😊 Added ${value == 0 ? 1 : value}`);
  };

  const decrementCount = (e) => {
    e.preventDefault();
    dispatch(countDecrement(value));
    toast.warning(`😥 Subtracted ${value == 0 ? 1 : value}`);
  };

  const resetCount = (e) => {
    e.preventDefault();
    setValue(0);
    dispatch(setCounterCount(0));
    toast.info('🥳 Counter and value reset to 0');
  };

  return (
    <div className="flex justify-center items-center  h-full">
      <div className="flex flex-col justify-center items-center w-96 ">
        <Suspense fallback={<p>Loading..</p>}>
          <ErrorBoundary
            fallback={<p>There seems to be something wrong with the counter</p>}
          >
            <CountDisplayComponent isLoading={isLoading} />
          </ErrorBoundary>
        </Suspense>

        <form className="w-full">
          <div className="mb-9">
            <label htmlFor="numberValue" className="text-left text-base">
              Add Input Value
            </label>
            <input
              value={value}
              id="numberValue"
              className="w-full text-black h-12 text-center rounded-lg mt-2"
              type="number"
              onChange={handleChange}
            />
            <p className="text-xs my-1 text-gray-400">
              Without user input,0 value will default to 1{' '}
            </p>
          </div>
          <div className="flex justify-between mb-4">
            <button className="form-btn" onClick={incrementCount}>
              Increment
            </button>
            <button className="form-btn" onClick={decrementCount}>
              Decrement
            </button>
          </div>
          <div>
            <button className="reset-btn" onClick={resetCount}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CounterPage;
