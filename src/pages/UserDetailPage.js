import React, { Component } from 'react';
import axios from 'axios';
import App from '../App';
import ItemList from '../components/item/ItemList';

class UserDetailPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userItems: [],
			//must be initialized
			user: {}
		}
	}

	componentDidMount() {
		const host = 'http://robostore-api.us-east-1.elasticbeanstalk.com';
		//const host = "http://localhost:8080";
		const itemPath = host + '/api/users/' + this.props.match.params.id + '/inventory';
		const userPath = host + '/api/users/' + this.props.match.params.id;
		axios.all([
			axios.get(itemPath),
			axios.get(userPath)
			])
			.then(axios.spread((items, user) => {
				this.setState({userItems: items.data});
				this.setState({user: user.data});
				console.log(user.data);
			}))
			.catch(error => console.log(error));
	}

	render() {
		return (
			<App>
				<div className="bg page-header yellow-bg">
					<div className="container">
						<h1>{this.state.user.name}</h1>
					</div>
				</div>
				<div className="section">
					<div className="container">
						<ItemList items={this.state.userItems} />
					</div>
				</div>
			</App>
		)
	}
}

export default UserDetailPage;