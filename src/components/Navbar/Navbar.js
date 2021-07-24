import React, { useEffect, useState } from 'react';
import logo from '../../images/logo-light.png';
const Navbar = () => {
    const [state, setState] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
    },[])
    const handleScroll = () => {
        if(window.scrollY > 120){
            setState(true);
        }else{
            setState(false);
        }
    }
    return (
        <div className={`navbar ${state ? 'whiteBg' : 'transparent'}`}>
            <div className="container">
                <div className="navbar__content">
                    <div className="navbar__left">
                        <img src={state ? '/images/logo-dark.png' : '/images/logo-light.png'} alt="" />
                    </div>
                    <ul className="navbar__right">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                        <a href="">Showcases </a>
                            
                        </li>
                        <li>

                        </li>
                        <li>
                        <a href="">About us</a>

                        </li>
                        <li>
                        <a href="">Content</a>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;