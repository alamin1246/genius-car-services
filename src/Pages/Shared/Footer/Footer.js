// import React, { useEffect, useState } from 'react';
import React from 'react';

const Footer = () => {
    // const [date, setDate] = useState();

    // const getYear = () => setDate(new Date().getFullYear())


    // useEffect(() => {
    //     getYear();
    // }, [])
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <small>&copy; Copyright {year}</small>
        </footer>
    );
};

export default Footer;