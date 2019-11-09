import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <img src="/images/logo.png" />
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">feed</Link>
          </li>

          <li>
            <Link to="/dashboard">dashboard</Link>
          </li>

          <li>
            <Link to="/create">create</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
