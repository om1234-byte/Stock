import React from 'react';
import  {Link}  from 'react-router-dom';
function NavBar() {
    return ( 
        <nav
        class ="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#FFF"}}>
            <div class ="container  mb-5">
                <Link class="navbar-brand row" to='/'>
                    <img src='/image/OIP.jpg' class="col-6" style={{ width:"30%" }} alt='Logo'/>
                    <h1 class="navbar-brand mt-3 col-6" style={{ fontSize: "30px", fontStyle: "italic", fontWeight: "bold" }}>KYNE</h1>
                </Link>
                <button
                class="navbar-toggler"
                type='button'
                data-bs-toggle = "collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls='navbarSupportedContent'
                aria-expanded="false"
                aria-label='Toggle navigation'>
                    <span class='navbar-toggler-icon'></span>
                </button>
                <div class="collapse navbar-collapse" id='navbarSupportedContent'>
                    <form class="d-flex" role='search'>
                        <ul class='navbar-nav mb-lg-0'>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" text-decoration="none" href='http://localhost:3000'>Signup</a>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active"  to='/about'>About</Link>
                            </li>
                             <li class="nav-item">
                                <Link class="nav-link active"  to='/product'>Product</Link>
                            </li>
                             <li class="nav-item">
                                <Link class="nav-link active"  to='/pricing'>Pricing</Link>
                            </li>
                             <li class="nav-item">
                                <Link class="nav-link active"  to='/support'>Support</Link>
                            </li>
                        </ul>
                    </form>

                </div>
            </div>

        </nav>
     );
}

export default NavBar;