import { Component } from 'react'
import Information from './Information'
import ShoppingAddForm from './Shopping-add-form'
import ShoppingList from './Shopping-list'
import Filter from './Filter'
import { err } from '../constannts'
import { v4 as uuidv4 } from 'uuid'
import SearchPanel from './Search-panel'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: err,
			search: '',
			filter: 'all',
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

	searchData = (arr, term) => {
		if (!term.length) {
			return arr
		}
		return arr.filter(
			item => item.title.toLowerCase().indexOf(term.toLowerCase()) > -1
		)
	}

	onUpdateSearch = search => {
		this.setState({ search })
	}

	filterData = (arr, filter) => {
		switch (filter) {
			case 'completed':
				return arr.filter(item => item.active)
			case 'big-size':
				return arr.filter(item => item.size > 10)
			default:
				return arr
		}
	}

	onFilterSelect = filter => {
		this.setState({ filter })
	}

	render() {
		const { data, search, filter } = this.state
		const allData = this.filterData(this.searchData(data, search), filter)
		return (
			<div className='app'>
				<div className='wrapper'>
					<div className='card'>
						<Information length={data.length} />
						<SearchPanel onUpdateSearch={this.onUpdateSearch} />
						<ShoppingAddForm onAddItem={this.onAddItem} />
						<ShoppingList
							data={allData}
							onDelete={this.onDelete}
							onToggleActive={this.onToggleActive}
						/>
						<Filter
							filter={filter}
							onFilterSelect={this.onFilterSelect}
						/>
					</div>
					<img src='/earth.svg' alt='' />
				</div>
			</div>
		)
	}
}

export default App
