import './App.css'
import { PaintingList } from './components/PaintingList'
import { LessonTheme } from './components/LessonTheame'
import paintingData from './painting.json'

const App = () => {
	return (
		<div className='main'>
            <List data={ paintingData} />
		</div>
	)
}

const List = ({data}) => {
	return (
        <ul >
            {
                data.map((rec) => {
                    return <Item title={rec.title} price={ rec.price} />
                })
            }
          
		</ul>
	)
}

const Item = ({title, price}) => {
	return (
		<li >
            <h2>tytle item</h2>
            <p>{ title}</p>
            <p>{ price}</p>
		</li>
	)
}