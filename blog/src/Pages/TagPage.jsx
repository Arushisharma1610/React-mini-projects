import React from 'react'
import Header from '../components/Header';
import Pageination from '../components/Pageination';
import { useLocation, useNavigate } from 'react-router-dom';
import Blog from '../components/Blog';

const TagPage = () => {

  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div>
    <Header/>
      <div>
        <button
        onClick={() => navigation(-1) }
        >
          Back
        </button>
        <h2>
          Blogs Tagged <span>#{tag}</span>
        </h2>
      </div>

      <Blog/>
      <Pageination/>

    </div>

  )
}

export default TagPage