import React, { Component } from 'react';
import App from '../App';
import ItemList from '../components/item/ItemList';
import axios from 'axios';

export default class ItemListPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		}
	}

	componentDidMount() {
		const host = 'https://robostore.herokuapp.com';

		axios.get(host + '/api/items')
		.then(response => this.setState({items: response.data}))
		.catch(error => console.log(error));
	}

	render() {
		return (
			<App>
				<div className="bg page-header yellow-bg">
					<div className="container">
						<h1>Items</h1>
					</div>
				</div>
				<div className="section">
					<div className="container">
						<ItemList items={this.state.items} />
					</div>
				</div>
			</App>
		)
	}
}
