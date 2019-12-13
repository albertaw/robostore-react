import React, { Component } from 'react';
import axios from 'axios';
import App from '../App';
import UserList from '../components/user/UserList';

class ItemDetailPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sellers: [],
			item: {}
		}
	}

	componentDidMount() {
		const host = 'https://robostore.herokuapp.com';
		const itemPath = host + '/api/items/' + this.props.match.params.id;
		
		axios.get(itemPath)
		.then(response => {
			this.setState({item: response.data});
		})
		.catch(error => console.log(error));
	}

	render() {
		return (
			<App>
				<div className="bg page-header yellow-bg">
					<div className="container">
						<h1>Buy now</h1>
					</div>
				</div>
				<div className="section">
					<div className="container">
						<h2>{this.state.item.name}</h2>
						<img className="item" src={this.state.item.url} alt={this.state.item.name} />
					</div>
				</div>
			</App>
		)
	}
}

export default ItemDetailPage;