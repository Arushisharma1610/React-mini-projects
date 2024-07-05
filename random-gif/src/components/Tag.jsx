import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from './hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState('car');
  // const [gif, setGif] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState('');

  // async function fetchData(retries = 3, backoff = 1000) {
  //   try {
  //     setLoading(true);
  //     setError('');
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //     const { data } = await axios.get(url);
  //     const imgSource = data.data.images.downsized_large.url;
  //     setGif(imgSource);
  //     setLoading(false);
  //   } catch (error) {
  //     if (error.response && error.response.status === 429 && retries > 0) {
  //       const retryAfter = error.response.headers['retry-after'];
  //       const delay = retryAfter ? parseInt(retryAfter, 10) * 1000 : backoff;
  //       console.warn(`Rate limited. Retrying after ${delay / 1000} seconds...`);
  //       await new Promise(resolve => setTimeout(resolve, delay));
  //       fetchData(retries - 1, backoff * 2);
  //     } else {
  //       setError('Failed to fetch GIF. Please try again later.');
  //       console.error('Error fetching data:', error);
  //       setLoading(false);
  //     }
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const{gif, loading, fetchData, error} = useGif(tag);

  function clickHandler() {
    fetchData(tag);
  }


  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className="w-1/2  bg-blue-500  rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl uppercase underline font-bold">Random {tag} Gif</h1>
      {loading ? (
        <Spinner />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <img src={gif} width="450" alt="Random Gif" />
      )}

      <input
        className='w-10/12 text-xl py-2 rounded-lg font-bold mb-[6px] text-center'
        onChange={changeHandler}
        value={tag}
      />

      <button
        onClick={clickHandler}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
