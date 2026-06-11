import React from 'react';
import { Link } from 'react-router-dom';
function RightSection({
    imageURL, productName, productDescription, learnMore
}) {
    return (  
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5 mt-5'>
                     <h1>{productName}</h1>
                    <p>{productDescription}</p>
                     <div>
                
                     <Link to={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>
                        Learn More
                    </Link>
                    </div>
                </div>
                <div className='col-6'>
                   <img src={imageURL} alt='right image' /> 
                </div>?

            </div>
        </div>
    );
}

export default RightSection;