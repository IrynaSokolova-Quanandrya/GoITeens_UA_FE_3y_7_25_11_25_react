import './App.css'
import { PaintingList } from './components/PaintingList'
import { LessonTheme } from './components/LessonTheame'
import paintingData from './painting.json'

const App = () => {
	return (
		<div className='main'>
            {/* <LessonTheme /> */}
            <PaintingList data={ paintingData} />
		</div>
	)
}
// function A(a, b) {
	
// 	return a+b
// }
// A(10, 15)
// A(20, 47)

// function b() {
// 	console.log('Hello');
// }
// b()
export default App



/**
 * 
    <li>
    <img src="" alt="..." width="480"/>
    <h2></h2>
    <p>
        Автор: <a href=""></a>
    </p>
    <p>Ціна: грн</p>
    <p>Наявність:  </p>
    <button type="button">Додати в кошик</button>
</li>
 */