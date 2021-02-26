import React from 'react';
import Nav from './views/Nav';
import Visual from './views/Visual';
import Terminal from './views/Terminal';
import { useParams } from 'react-router-dom';

function Container () {
  const { chapter, number } = useParams();

  return (
    <div id='container'>
      <Nav currentChapter={chapter} currentStep={number} />
      <Visual currentChapter={chapter} currentStep={number} />
      <Terminal currentChapter={chapter} currentStep={number} />
    </div>
  );
}

export default Container;
