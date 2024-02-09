import React from 'react';

const Banner = () => {

    return (<div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="https://image.similarpng.com/very-thumbnail/2021/05/Instagram-3d-social-media-icons-with-smartphone-on-transparent-background-PNG.png" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
                <h1 className="text-5xl font-bold">Stay Connect with Connectify!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
    );
};

export default Banner;