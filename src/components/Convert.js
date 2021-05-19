import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {

    useEffect(() => {
        console.log('new language or text')
    }, [language, text]);

    return (
        <div>

        </div>
    );
}

export default Convert;