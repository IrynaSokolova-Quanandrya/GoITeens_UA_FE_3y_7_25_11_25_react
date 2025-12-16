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




               cb()              cb()             cb()
const arr=[{ a: 5, b: 10 }, { a: 5, b: 10 }, { a: 5, b: 10 }]

arr.map((point) => {
	return <Item/>
})
[<li>
		<p>{point.a}</p>
		<p>{ point.a}</p>
	</li>, return1, retuyrn2, <li>
		<p>{point.a}</p>
		<p>{ point.a}</p>
</li>, 
	<li>
		<p>{point.a}</p>
		<p>{ point.a}</p>
	</li>]
