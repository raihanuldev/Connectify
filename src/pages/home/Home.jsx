import React from 'react';
import Banner from '../../componets/banner/Banner';
import UploadPost from '../../componets/uploadpost/UploadPost';
import TopPost from '../../componets/topPost/TopPost';
import PopularPost from '../../componets/popularPost/PopularPost';

const Home = () => {
    return (
        <div>
            <Banner/>
            <TopPost/>
            <PopularPost/>
        </div>
    );
};

export default Home;