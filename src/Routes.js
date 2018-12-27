import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserListPage from './pages/UserListPage';
import UserDetailPage from './pages/UserDetailPage';
import ItemListPage from './pages/ItemListPage';
import ItemDetailPage from './pages/ItemDetailPage';

function Routes() {
	return (
		<Router>
			<div>
				<Route exact path='/' component={UserListPage} />
				<Route exact path='/users/:id' component={UserDetailPage} />
				<Route exact path='/items' component={ItemListPage} />
				<Route exact path='/items/:id' component={ItemDetailPage} />
			</div>
		</Router>
	)
}

export default Routes;