import { useContext, useEffect } from 'react';
import './App.css';
import Blog from './components/Blog';
import Header from './components/Header';
import Pageination from './components/Pageination';
import { AppContext } from './context/AppContext';

export default function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect( () => {
    fetchBlogPosts();
  }, []);


  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
    <Header/>
    <Blog/>
    <Pageination/>
    </div>
    
  );
}

// export default App;
