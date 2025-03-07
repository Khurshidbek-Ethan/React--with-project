import Information from './Information'
import ShoppingAddForm from './Shopping-add-form'
import ShoppingList from './Shopping-list'
import Filter from './Filter'

function App() {
	return (
		<div className='app'>
			<div className='wrapper'>
				<div className='card'>
					<Information />
					<ShoppingAddForm />
					<ShoppingList />
					<Filter />
				</div>
				<img src='/earth.svg' alt='' />
			</div>
		</div>
	)
}

export default App
