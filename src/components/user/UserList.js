import React from 'react';
import UserDetail from './UserDetail';

function UserList(props) {
	let users = props.users.map((user) =>
		<UserDetail
			key={user.userId}
			id={user.userId}
			name={user.name} />
	);

	return (
		<ul className="user-list">{users}</ul>
	)
}

export default UserList;