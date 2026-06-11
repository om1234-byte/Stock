import React from 'react';
import  {Link}  from 'react-router-dom';
function Team() {
    return ( 
        <div className='container'>
            <div className='row p-3 mt-5  border-top'>
                <h1 className='text-center' >People</h1>
            </div>
            <div className='row p-3 text-muted' style={{lineHeight:"1.8",fontSize:"14px"}}>
             <div className='col-6 p-5 text-center'>
                <img src="/image/OIP.jpg" style={{borderRadius:"100%",width:"50%"}} alt="photo"/>
            
                <h4 className='mt-5'>Om Kushwaha</h4>
                <h6>Founder</h6>
             </div>
             <div class='col-6 mt-5 pt-5 '>
                <p >I am Om Kushwaha 3rd year student ,pursuring my Btech from Computer Science Engineering from JEC collage </p>
                <p>This website is clone of online stock trading platform  </p>
                <p>Connect on <Link to="/"> Homepage</Link> /{" "}<a href="https://www.tradingview.com/">TradingView</a>/{" "}<a href='https://www.linkedin.com/in/om-kushwaha-1791a7329/'>Linkdin</a></p>
            </div>
            </div>
        </div>
     );
}

export default Team;