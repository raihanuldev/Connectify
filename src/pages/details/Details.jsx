
import { useLocation } from 'react-router-dom';
import Comment from './Comment';
import CommentSection from './CommentSection';
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';

const Details = () => {
    const location = useLocation();
    console.log(location.state)
    const post = location.state;
    const [like, setLike] = useState(post.like);
    const [reacted, setReacted] = useState(false);

    const handleReaction = () => {
        if (!reacted) {
            setLike(like + 1);
            setReacted(true);
        }
    };
    return (
        <div className='bg-base-300 px-2 my-2 rounded-xl py-5'>
            <h1 className='text-center text-3xl font-semibold'>View Details About Post</h1>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <img src={post.image} className='rounded-lg w-96' alt="" />
                <div className='py-2'>
                    <p className='text-xl'><span className='text-red-400'>Status: </span>{post.caption}</p>
                    <p className='text-xl'><span className='text-red-400'>Author Email:</span> {post.email}</p>
                    <p className='text-xl'>Total Reaction: {like} </p>
                    <button onClick={handleReaction} className='text-2xl btn py-2 bg-warning'>
                        {reacted ? 'You have reacted' : 'Give React'}
                    </button>                </div>
            </div>
            <CommentSection/>
        </div>
    );
};

export default Details;