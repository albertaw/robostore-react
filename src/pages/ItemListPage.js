import React, { Component } from 'react';
import App from '../App';
import ItemList from '../components/item/ItemList';

export default class ItemListPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		}
	}

	componentDidMount() {
		const host = 'http://robostore-api.us-east-1.elasticbeanstalk.com';

		fetch(host + '/api/items')
		.then(data => data.json())
		.then(response => this.setState({items: response}))
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
