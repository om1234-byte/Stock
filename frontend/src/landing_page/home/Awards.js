import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src = "/image/largestBroker.svg" alt="Largest Stock Broker" />
                </div>
                <div className='col-6 p-5 mt-5'>
                        <h1>Largest stock broker in India</h1>
                        <p className='mb-5'>1.5+ Crore Kyne clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                        <div className='row mb-2'>
                            <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Features and Options</p>
                                </li>
                                <li>
                                     <p> Commodity derivatives</p>
                                </li>
                                 <li>
                                     <p>Stocks & IPOs </p>
                                </li>
                            </ul>
                            </div>
                            <div className='col-6'>
                            <ul>
                                 <li>
                                     <p> Direct mutual funds</p>
                                </li>
                                <li>
                                     <p> Bonds and Govt. Securities</p>
                                </li>
                                <li>
                                     <p> Currency derivatives</p>
                                </li>  
                            </ul>
                            </div>
                        </div>
                        <img src ="/image/pressLogos.png" alt="Press Logos" style={{width:"90%"}}/>
                </div>

            </div>

        </div>
      );
}

export default Awards;