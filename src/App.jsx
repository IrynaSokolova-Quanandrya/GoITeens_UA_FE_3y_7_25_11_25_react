import './App.css'
import s from './App.module.css'
import { Counter } from './components/Counter/Counter'



export const App = () => {
	return (
		<div>			
			<Counter initialValue={0}/>
		</div>
	)
}


