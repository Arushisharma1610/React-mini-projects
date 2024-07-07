import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import Card from './Card'

const Blog = () => {

    // consume
    const {posts, loading} = useContext(AppContext)

  return (
    <div>
    {
        loading ? 
        (
            <Spinner/>
        ) : 
        (
            posts.length == 0? 
            (
                <div>
                    <p>No Post Found</p>
                </div>
            ) : 
            (
                posts.map( (post) => (<Card/>))
            )
        )
    }
    </div>
  )
}

export default Blog