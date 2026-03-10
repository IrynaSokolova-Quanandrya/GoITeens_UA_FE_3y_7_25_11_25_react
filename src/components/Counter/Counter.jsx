import React, { useEffect, useState } from 'react'
import { CounterContent } from './CounterContent'
import { ChangeBtn } from './ChangeBtn'

export const Counter = ({initialValue})=> {

	const [value, setValue] = useState(0)
	const [number, setNumber] = useState(0)

	useEffect(() => {
		
		return ()=>{}
	}, [])

	const handleIncrement = () => {
		console.log('number ')
		setNumber(value + 1)
	}
	const handleDecrement = () => {
		console.log('increment ')
		setValue(value - 1)
	}



		return (
			<div className='position-absolute top-50 start-50 translate-middle'>
				<div className='card bg-dark text-white ' style={{ width: '600px' }}>
					<div className='card-body'>
						<h5 className='card-title text-center fs-1'>Counter</h5>
						<CounterContent value={ value} />
						<ChangeBtn
							onIncrement={handleIncrement}
							onDecrement = {handleDecrement}
						/>
					</div>
				</div>
			</div>
		)
}
