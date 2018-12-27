import React from 'react';
import { Link } from 'react-router-dom';

function ItemDetail(props) {
	let path = '/items/' + props.id; 
	
	return (
		<li class="row mb-5">
			<div class="col-3">
				<img src={props.src} alt={props.name} />
			</div>
			<div class="col-9">
				<h3>{props.name}</h3>
				<p>{props.cost}</p>
				<Link to={path} className="button button-default button-blue button-pill">View Details</Link>
			</div>
		</li>
	)
}

export default ItemDetail;