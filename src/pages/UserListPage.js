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
		const host = 'https://robostore.herokuapp.com';
		
		axios.get(host + '/api/users')
		.then(response => this.setState({users: response.data}))
		.catch(error => console.error(error));
	}

	render() {
		return (
			<App>
				<div className="bg page-header lightning-bg dark-theme">
					<div className="container">
						<h1>Games</h1>
					</div>
				</div>
				<div className="section">
					<div className="container">
						<UserList users={this.state.users} />
					</div>
				</div>
			</App>
			
		)
	}
}