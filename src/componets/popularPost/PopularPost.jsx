import React, { useEffect, useState } from 'react';
import MediaCard from '../mediaCard/MediaCard';

const PopularPost = () => {
    const [popular, setpopular] = useState([])

    useEffect(() => {
        fetch('https://connectify-server-three.vercel.app/popular')
            .then(res => res.json())
            .then(data => setpopular(data))
    }, [])

    return (
        <div>
            <p className='text-center text-3xl font-semibold mt-3'>Popular Post</p>
            <div className='grid grid-cols-1 md:grid-cols-3 my-4'>
                {
                    popular.map(post => <MediaCard key={post._id} post={post} />)
                }
            </div>
        </div>
    );
};

export default PopularPost;