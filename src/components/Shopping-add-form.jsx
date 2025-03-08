import React from 'react'
class ShoppingAddForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: 'Buy ',
			number: '',
		}
	}

	onChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	onAdd = () => {
		const data = {
			title: this.state.title,
			number: this.state.number,
		}
		console.log(data)
	}

	render() {
		const { title, number } = this.state
		return (
			<div className='form'>
				<input
					type='text'
					className='title'
					placeholder='Title...'
					name='title'
					value={title}
					onChange={this.onChange}
				/>
				<input
					type='number'
					className='number'
					placeholder='number'
					name='number'
					value={number}
					onChange={this.onChange}
				/>
				<button onClick={this.onAdd}>Add</button>
			</div>
		)
	}
}

export default ShoppingAddForm
