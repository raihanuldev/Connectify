import React, { useEffect, useState } from 'react';
import MediaCard from '../mediaCard/MediaCard'
const TopPost = () => {
    const [topPost,setTopPost] = useState([])

    useEffect(()=>{
        fetch('https://connectify-server-three.vercel.appmedia/top')
        .then(res=>res.json())
        .then(data=>setTopPost(data))
    },[])

    return (
        <div>
            <p className='text-center text-3xl font-semibold mt-3'>Todays Trending Post</p>
            <div className='grid grid-cols-1 md:grid-cols-3 my-4'>
                {
                    topPost.map(post=> <MediaCard key={post._id} post={post}/>)
                }
            </div>
        </div>
    );
};

export default TopPost;