import React, { Component } from 'react';
import App from '../App';
import UserList from '../components/user/UserList';
import axios from 'axios';

export default class UserListPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
		}
	}

	componentDidMount() {
		const host = 'http://robostore-api.us-east-1.elasticbeanstalk.com';
		
		axios.get(host + '/api/users')
		.then(response => this.setState({users: response.data}))
		.catch(error => console.error(error));
	}

	render() {
		return (
			<App>
				<div className="bg page-header yellow-bg">
					<div className="container">
						<h1>Games</h1>
						<UserList users={this.state.users} />
					</div>
				</div>
			</App>
			
		)
	}
}