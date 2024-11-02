import React from 'react';
import {Link} from "react-router-dom";
import './Test.css'

function About() {
  return (
    <div className='root'>
        <h1>Test</h1>
        <Link to="/test2">Роут на тест 2</Link>
    </div>
  );
}

export default About;
