import React from 'react';
import Nav from './views/Nav';
import Visual from './views/Visual';
import Terminal from './views/Terminal';
import { useParams } from 'react-router-dom';

function Container() {

  let { number } = useParams();

  return (
    <>
      <Nav currentStep={number}/>
      <Visual currentStep={number}/>
      <Terminal currentStep={number}/>
    </>
  )
}

export default Container;