import React from 'react';
import ItemDetail from './ItemDetail';

function ItemList(props) {
	const items = props.items.map((item) =>
		<ItemDetail
			key={item.itemId}
			id={item.itemId}
			name={item.name}
			cost={item.cost}
			src={item.url}
			alt={item.name} />
	);

	return (
		<ul class="item-list">{items}</ul>
	)

}

export default ItemList;