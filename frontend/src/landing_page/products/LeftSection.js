import React from 'react';
import { Link } from 'react-router-dom';
function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,

}) {
    return (  
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 '>
                    <img src={imageURL}  alt="Left image"/>
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                    <Link to={tryDemo} style={{ textDecoration:"none"}}>
                        Try Demo
                    </Link>
                     <Link to={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>
                        Learn More
                    </Link>
                    </div>
                    <div className='mt-3'>
                    <a href={googlePlay} target="_blank" style={{textDecoration:"none"}}>
                        <img src='/image/googlePlayBadge.svg' alt='googleplay'/>
                    </a>
                    <a href={appStore} target="_blank" style={{textDecoration:"none"}}>
                        <img src='/image/appstoreBadge.svg' alt='appstore'/>
                    </a>
                </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;