import React from 'react';
import Nav from './views/Nav';
import Visual from './views/Visual';
import Terminal from './views/Terminal';
import { useParams } from 'react-router-dom';
import './Container.css';

function Container() {

  let { number } = useParams();

  return (
    <div className="container">
      <Nav currentStep={number}/>
      <Visual currentStep={number}/>
      <Terminal currentStep={number}/>
    </div>
  )
}

export default Container;