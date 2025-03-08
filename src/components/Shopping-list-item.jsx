import React from 'react'

class ShoppingListItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			active: false,
		}
	}

	// 1chi usul this.setState(state =>({})) -> biz ozgartirmoqchi bolgan statimiz 	active: false,bu oldingi xolatiga qaram bolsa
	// masalan oldingi xolati true bolsa biz false qilishimiz kerak callback yordamida ishlatamiz
	// 2chi usul this,setState({}) object yordamida -> biz ozgartirmoqchi bolgan state oldingi statega
	// qaram bolmasa biz unda oddiy objectdan foydalanamiz
	onToggleActive = () => {
		this.setState(state => ({
			active: !state.active,
		}))
	}

	render() {
		const { item } = this.props,
			{ active } = this.state

		return (
			<div key={item.id} className={`list-item ${active && 'active'}`}>
				<div className='item-info'>
					<span>{item.size}</span>
					<p>{item.title}</p>
				</div>
				<div className='item-actions'>
					<span className='check' onClick={this.onToggleActive}>
						&#10003;
					</span>
					<span
						className='times'
						onClick={() => console.log('delete')}
					>
						&times;
					</span>
				</div>
			</div>
		)
	}
}

export default ShoppingListItem
