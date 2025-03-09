import ShoppingListItem from './Shopping-list-item'
const ShoppingList = ({ data, onDelete, onToggleActive }) => {
	return (
		<div className='shopping-list'>
			{data.length ? (
				data.map(item => (
					<ShoppingListItem
						item={item}
						key={item.id}
						onDeleteItem={() => onDelete(item.id)}
						onToggleActiveItem={() => onToggleActive(item.id)}
					/>
				))
			) : (
				<div>
					<h1 style={{ textAlign: 'center', color: '#fff' }}>
						Not found data
					</h1>
				</div>
			)}
		</div>
	)
}
export default ShoppingList
