import './App.css'
import s from './App.module.css'
import { PaintingList } from './components/PaintingList'
import { LessonTheme } from './components/LessonTheame'
import paintingData from './painting.json'
import { ColorOptions } from './components/ColorPicker/ColorOptions'
import { colorPickerOptions } from './colorOptions'
import { AiFillGithub } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { Container } from './components/Container/Container'

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
			<Container>
				<PaintingList
					data={paintingData}
						icon={AiFillHeart} />
			</Container>
		</div>
	)
}


