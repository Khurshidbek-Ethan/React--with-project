import { Component } from 'react'
import Information from './Information'
import ShoppingAddForm from './Shopping-add-form'
import ShoppingList from './Shopping-list'
import Filter from './Filter'
import { err } from '../constannts'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: err,
		}
	}

	render() {
		const { data } = this.state
		return (
			<div className='app'>
				<div className='wrapper'>
					<div className='card'>
						<Information />
						<ShoppingAddForm />
						<ShoppingList data={data} />
						<Filter />
					</div>
					<img src='/earth.svg' alt='' />
				</div>
			</div>
		)
	}
}

export default App
