import React, { useEffect, useState } from 'react'
import { Spinner } from '../Components/Spinner';
import Product from '../Components/Product';

const Home = () => {

    const API_URL = "https://fakestoreapi.com/products";
    const[loading, SetLoading] = useState(false);
    const[posts, setPosts] = useState([]);

    async function fetchProductData() {
        SetLoading(true);

        try{
            const res = await fetch(API_URL);
            const data = await res.json();

            setPosts(data);
        }
        catch(error){
            console.log("Error in fetching data");
            setPosts([]);

        }
        SetLoading(false);
    }

    useEffect( () => {
        fetchProductData();
    },[])

  return (
    <div>
        {
            loading ? <Spinner/> :
            posts.length > 0 ? 
            ( <div>
               { posts.map((post) =>(
                    <Product key={post.id} post={post} />
                ))
                }
            </div>) :
            (<div>
                <p>No Data Found</p>
            </div>)
        }
    </div>
  );
};

export default Home