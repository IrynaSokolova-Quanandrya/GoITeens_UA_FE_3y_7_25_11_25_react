import './App.css'
import s from './App.module.css'


import paintingData from './painting.json'
import { ColorOptions } from './components/ColorPicker/ColorOptions'
import { colorPickerOptions } from './colorOptions'
import { AiFillGithub } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { Container } from './components/Container/Container'
import { PaintingList } from './components/Painting/PaintingList'
import { Alert } from './components/Alert/Alert'
import { Counter } from './components/Counter/Counter'

/**
 * 
 * Alert Властивість 'type' може бути лише 'error' 'success' або 'warning'

```html
<p className="alert"></p>
```
 */

export const App = () => {
	return (
		<div>
			{/* <Alert type='error'/>
			<Alert type='success'/>
			<Alert type='warning' /> */}
			<Counter/>
			{/* <Container>
				<PaintingList
					data={paintingData}
						icon={AiFillHeart} />
			</Container> */}
		</div>
	)
}


