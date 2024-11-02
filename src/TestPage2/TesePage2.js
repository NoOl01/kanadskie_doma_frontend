import React from 'react';
import {Link} from "react-router-dom";
import './TestPage2.css'

function Test2() {
    return (
        <div className='root'>
            <h1>Test2</h1>
            <Link to="/">Роут на мейн</Link>
        </div>
    );
}

export default Test2;
