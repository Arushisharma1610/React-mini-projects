import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails';

const Blog = () => {

    // consume
    const {posts, loading} = useContext(AppContext)

  return (
    <div className='w-11/12 max-w-[450px] py-10 flex flex-col gap-y-7'>
    {
        loading ? 
        (
            <Spinner/>
        ) : 
        (
            posts.length === 0? 
            (
                <div>
                    <p>No Post Found</p>
                </div>
            ) : 
            (
                posts.map( (post) => (
                   <BlogDetails key={post.id} post = {post} />
                ))
            )
        )
    }
    </div>
  );
};

export default Blog;