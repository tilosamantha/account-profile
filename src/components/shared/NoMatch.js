import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <>
    <h1>404 PAGE NOT FOUND</h1>
    <Link to='/'>
      Return Home
    </Link>
  </>
)




export default NoMatch;



//This page is for when the user goes to a route not specified
//Error page