// import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Tag from '../Tag';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;



const useGif = (tag) => {
    // const [tag, setTag] = useState('car');
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
  
    async function fetchData(retries = 3, backoff = 1000 , tag){
      try {
        setLoading(true);
        setError('');
        const { data } = await axios.get(tag? `${url}&tag=${tag}` : url);
        const imgSource = data.data.images.downsized_large.url;
        setGif(imgSource);
        setLoading(false);
      } catch (error) {
        if (error.response && error.response.status === 429 && retries > 0) {
          const retryAfter = error.response.headers['retry-after'];
          const delay = retryAfter ? parseInt(retryAfter, 10) * 1000 : backoff;
          console.warn(`Rate limited. Retrying after ${delay / 1000} seconds...`);
          await new Promise(resolve => setTimeout(resolve, delay));
          fetchData(retries - 1, backoff * 2);
        } else {
          setError('Failed to fetch GIF. Please try again later.');
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      }
    }

    useEffect(() => {
        fetchData();
      }, []);

      return{gif, loading, fetchData, error}
}

export default useGif