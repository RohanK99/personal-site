import React from 'react';
import { Link } from 'react-router-dom'
import './coming-soon.css'
import BackButton from '../assets/Back-Button.svg'


const ComingSoon = () => (
  <div>
    <Link to="/"><img
      src={BackButton}
      className="back"
      alt="back-button"
    /></Link>
    <div className="container text-center">
      <div className="text-left">
        <br />
        <h2>Article Coming Soon!</h2>
        <hr className="gradient"/>
        <br />
        <p>Stay Tuned</p>
      </div>
    </div>
  </div>
);

export default ComingSoon;
