import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className="menu menu-horizontal menu-top light-theme transparent">
			<div className="container">
	      <ul className="nav-left">
	        <li><Link to="/">Home</Link></li>
	        <li><Link to="/items">Game Store</Link></li>
	      </ul>
	     </div>
    </header>
	)
}

export default Header;