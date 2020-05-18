import React from 'react';
import ReactDOM from 'react-dom';
import Car from './components/Car';

const element=
<div>
  <Car brand="Tesla"></Car>
  <Car color="Red"></Car>
  </div>

ReactDOM.render(
  
  element,
  document.getElementById('root')
);

