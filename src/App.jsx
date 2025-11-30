import './App.css'

const App = () => {
	return (
		<div className='main'>
			<h1>Компоненти</h1>
			<h2>Сьогодні ми вивчимо:</h2>
			<ol>
				<li>
					<p>Що таке функціональні компоненти</p>
				</li>
				<li>
					<p>Властивості компонента (props)</p>
				</li>
				<li>
					<p>Значення пропсів за замовчуванням</p>
				</li>
				<li>
					<p>Властивість props.children</p>
				</li>
				<li>
					<p>Властивість propTypes</p>
				</li>
			</ol>
		</div>
	)
}

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