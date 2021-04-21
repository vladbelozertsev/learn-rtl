import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search-types">Search Types</Link>
        </li>
        <li>
          <Link to="/search-variants">Search Variants</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
