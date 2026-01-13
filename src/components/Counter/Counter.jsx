import React from 'react'
import { ChangeBtn } from './changeBtn'
import { CounterContent } from './CounterContent'

export class Counter extends React.Component {

	state = {
		value: this.props.initialValue
	}
	
	handleIncrement = (event) => {
		console.log('increment ')
		// this.setState({value:1})
		this.setState(prevState=>({value:prevState.value += 1}))
	}
	handleDecrement = (event) => {
		console.log('increment ')
		// this.setState({value:1})
		this.setState(prevState=>({value:prevState.value -= 1}))
	}

	render() {
		return (
			<div className='position-absolute top-50 start-50 translate-middle'>
				<div className='card bg-dark text-white ' style={{ width: '600px' }}>
					<div className='card-body'>
						<h5 className='card-title text-center fs-1'>Counter</h5>
						<CounterContent value={ this.state.value} />
						<ChangeBtn
							onIncrement={this.handleIncrement}
							onDecrement = {this.handleDecrement}
						/>
					</div>
				</div>
			</div>
		)
	}
}
