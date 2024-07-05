// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Spinner from './Spinner';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

// const Random = () => {
  
//   const [gif, setGif] = useState('');
//   const [loading, setLoading] = useState('false');

//   async function fetchData() {
//     setLoading(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//     const {data} = await axios.get(url);
//     const imgSource = data.data.images.downsized_large.url;
//     // console.log(imgSource);
//     setGif(imgSource);
//     setLoading(false);
//   }

//   useEffect(
//     () => {
//       fetchData();
//     }, []
//   );

//   function clickHandler() {
//     fetchData();
//   }

//   return (
//     <div className="w-1/2 h-[450px] bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
//       <h1 className="text-3xl uppercase underline font-bold">Random Gif</h1>
      
//       {
//         loading ? (<Spinner/>) : (<img src={gif} width="450" />)
//       }

//       <button
//        onClick={clickHandler}
//       // onClick={() => fetchData()}
//       className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold"
//       >
//         Generate
//       </button>
//     </div>
//   )
// }

// export default Random;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from './hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  // const [gif, setGif] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState('');

  // async function fetchData(retries = 3, backoff = 1000) {
  //   try {
  //     setLoading(true);
  //     setError('');
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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

  const {gif, loading, fetchData, error} = useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-1/2  bg-green-500  rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl uppercase underline font-bold">Random Gif</h1>
      {loading ? (
        <Spinner />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <img src={gif} width="450" alt="Random Gif" />
      )}
      <button
        onClick={clickHandler}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;


