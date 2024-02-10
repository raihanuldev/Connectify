import React, { useEffect, useState } from 'react';
import MediaCard from '../../componets/mediaCard/MediaCard';

const Media = () => {
    const [media, setMedia] = useState([]);
    console.log(media)
    useEffect(() => {
        fetch('https://connectify-server-three.vercel.app/media')
            .then(res => res.json())
            .then(data => setMedia(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-2xl font-sans font-semibold my-3'>Explore All Media</h2>
            <div className='grid grid-cols-3'>
                {
                    media.map(post => <MediaCard key={post._id} post={post}/>)
                }
            </div>
        </div>
    );
};

export default Media;