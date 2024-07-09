import { useContext, useEffect } from 'react';
import './App.css';
import Blog from './components/Blog';
import Header from './components/Header';
import Pageination from './components/Pageination';
import { AppContext } from './context/AppContext';
import { Route, Routes } from 'react-router-dom';

export default function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect( () => {
    fetchBlogPosts();
  }, []);


  return (
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/blog/:blogId' element={<BlogPage/>} />
    <Route path='/tags/:tag' element={<TagPage/>} />
    <Route path='/categorie/:category' element={<CategoryPage/>} />

   </Routes>
    
  );
}

// export default App;
