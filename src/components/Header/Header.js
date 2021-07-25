import React, { useState } from 'react';

const Header = () => {
    const [state] = useState({heading: 'About Us', link1: 'Home', link2:'About Us' })
    return (
        <div className="header">
            <div className="header__content">
                <h1 className="header__content-h1">About Us</h1>
                <div className="header__content-links">
                    <a href={state.link1}>Home</a>
                    <span className="header__content-span"></span>
                    <a href={state.link2}>About us</a>
                </div>
            </div>
        </div>
    );
};

export default Header;