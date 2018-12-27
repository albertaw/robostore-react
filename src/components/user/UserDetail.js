import React from 'react';
import { Link } from 'react-router-dom';

function UserDetail(props) {
	const path = '/users/' + props.id;
	
	return (
		<li>
			<Link to={path}><button className="button button-default button-dark button-pill">{props.name}</button></Link>
		</li>
	)
}

export default UserDetail;