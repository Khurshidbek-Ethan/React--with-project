import { Component } from 'react'
import Information from './Information'
import ShoppingAddForm from './Shopping-add-form'
import ShoppingList from './Shopping-list'
import Filter from './Filter'
import { err } from '../constannts'
import { v4 as uuidv4 } from 'uuid'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: err,
		}
	}

	onDelete = id => {
		const newArr = this.state.data.filter(item => item.id !== id)
		// console.log(newArr)
		this.setState({
			data: newArr,
		})
	}

	onToggleActive = id => {
		// console.log('Active item:', id)
		const newArray = this.state.data.map(item => {
			if (item.id === id) {
				return { ...item, active: !item.active }
			}
			return item
		})
		// console.log(newArray)
		this.setState({
			data: newArray,
		})
	}

	onAddItem = item => {
		const { title, number } = item
		const newData = { title, size: number, active: false, id: uuidv4() }
		const newDataArray = [...this.state.data, newData]
		// console.log(newAr)
		this.setState({
			data: newDataArray,
		})
	}

	render() {
		const { data } = this.state
		return (
			<div className='app'>
				<div className='wrapper'>
					<div className='card'>
						<Information length={data.length} />
						<ShoppingAddForm onAddItem={this.onAddItem} />
						<ShoppingList
							data={data}
							onDelete={this.onDelete}
							onToggleActive={this.onToggleActive}
						/>
						<Filter />
					</div>
					<img src='/earth.svg' alt='' />
				</div>
			</div>
		)
	}
}

export default App
