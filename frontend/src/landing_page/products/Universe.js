import React from 'react';
function Universe() {
    return (
        <div className='container mt-5'>
             <div className='row text-center'>
                <h1>The Kyne Universe</h1>
                <p>
                    Extend your trading andinvestment experience even further with our partner platforms 
                </p>
               <div className='col-4  p-3 mt-5'>
                <img src='/image/OIP (1).jpg' alt = "logo" className="img-fluid w-50"/>
                <p className='text-small text-muted'>Creative design</p>
               </div>
               <div className='col-4 p-3 mt-5'>
                <img src='/image/streakLogo.png' alt = "logo" className="img-fluid w-50"/>
                <p className='text-small text-muted'>Algo & strategy platform</p>
               </div>
               <div className='col-4 p-3 mt-5'>
                <img src='/image/sensibullLogo.svg' alt = "logo" className="img-fluid w-50 "/>
                <p className='text-small text-muted'>Options trading platform</p>
               </div>
               </div>
               <div className='row text-center'>
               <div className='col-4 p-3 mt-5'>
                <img src='/image/zerodhaFundhouse.png' alt = "logo" className="img-fluid w-50"/>
                <p className='text-small text-muted'>Asset management</p>
               </div>
               <div className='col-4 p-3 mt-5'>
                <img src='/image/tijori.svg' alt = "logo" className="img-fluid w-50"/>
                <p className='text-small text-muted'>Fundamental research platform</p>
               </div>
               <div className='col-4 p-3 mt-5'>
                <img src='/image/dittoLogo.png' alt = "logo" className="img-fluid w-50"/>
                <p className='text-small text-muted'>Insurance</p>
               </div>
               <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}>Sign up Now</button>
             </div>
        </div>
      );
}

export default Universe;