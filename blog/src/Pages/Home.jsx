import React from 'react';
import Header from '../components/Header';
import Blog from '../components/Blog';
import Pageination from '../components/Pageination';

const Home = () => {
  return (
    <div>
        <Header/>
        <div>
            <Blog/>
            <Pageination/>
        </div>
    </div>
  )
}

export default Home