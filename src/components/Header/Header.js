import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="App">
           
            <h1> Computer Science Courses </h1>
            <nav>
                <a href="/Order">Order</a>
                <a href="/Courses">Courses</a>
                <a href="/about">About Us</a>
            </nav>

        </div>
    );
};

export default Header;