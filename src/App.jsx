import React from 'react'
import './App.css'
import { ColorOptions } from './components/ColorPicker/ColorOptions'
import { Container } from './components/Container/Container'

export class App extends React.Component {
	state = {
		name: '',
		mail: '',
		expirence: '',
		agree: false,
	}

	handleChange = e => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleCheckChange = () => {
		this.setState(prevState =>({ agree: !prevState.agree })
		)
	}

	render() {
		return (
			<Container>
				<form>
					<label>
						{' '}
						Ім'я
						<input
							onChange={this.handleChange}
							type='text'
							name='name'
							value={this.state.name}
						/>
					</label>
					<hr />
					<label>
						{' '}
						Електронна адреса
						<input
							onChange={this.handleChange}
							type='email'
							name='mail'
							value={this.state.mail}
						/>
					</label>
					<hr />
					<b>Професійний рівень</b>
					<hr />
					<label>
						{' '}
						junior
						<input
							onChange={this.handleChange}
							type='radio'
							name='expirence'
							value='junior'
							checked={this.state.expirence === 'junior'}
						/>
					</label>
					<label>
						{' '}
						middle
						<input
							onChange={this.handleChange}
							type='radio'
							name='expirence'
							value='middle'
							checked={this.state.expirence === 'middle'}
						/>
					</label>
					<label>
						{' '}
						senior
						<input
							onChange={this.handleChange}
							type='radio'
							name='expirence'
							value='senior'
							checked={this.state.expirence === 'senior'}
						/>
					</label>
					<hr />
					<label>
						<input
							onChange={this.handleCheckChange}
							type='checkbox'
							name='agree'
							checked={this.state.agree}
						/>
						Погоджуюсь з умовами
					</label>
				</form>
			</Container>
		)
	}
}
