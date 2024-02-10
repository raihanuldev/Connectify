import React from 'react';

const MediaCard = ({post}) => {
    const {image,caption} = post
    return (<div className="card card-compact w-96 bg-base-100 ">
        <img src={image} alt="image" className='h-[150px] w-[auto]' />
        <div className="card-body">
            <h2 className="card-title">{caption.slice(0,30)}...</h2>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
            </div>
        </div>
    </div>
    );
};

export default MediaCard;