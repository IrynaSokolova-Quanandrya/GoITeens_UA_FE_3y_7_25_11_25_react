import { PaintingItem } from './PaintingItem'

export const PaintingList = props => {
	return (
		<ul>
			{props.data.map(item => {
				return (
					<li key={item.id}>
						<img src={item.url} alt='...' width='200' />
						<h2>{item.title}</h2>
						<p>
							Автор: <a href={item.author.url}>{item.author.tag}</a>
						</p>
						<p>Ціна:{item.price} грн</p>
						<p>Наявність: {item.quantity} </p>
						<button type='button'>Додати в кошик</button>
					</li>
				)
			})}
		</ul>
	)
}
