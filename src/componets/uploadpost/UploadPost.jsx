import React from 'react';

const UploadPost = () => {
    return (
        <div className='hero min-h-screen bg-base-200 '>
            <form>
                <textarea className='w-full max-w-xs' name="text" id="text" cols="60" rows="10"></textarea>
                <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                
            </form>
        </div>
    );
};

export default UploadPost;