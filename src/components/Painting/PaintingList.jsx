import { List, Item } from './Painting.styled'
import { PaintingItem } from './PaintingItem'

export const PaintingList = ({data, icon: Icon}) => {
	return (
		<>
		<List>
			{data.map(item => {
				return (
					<Item key={item.id}>
						<Icon/>
						<img src={item.url} alt='...' width='200' />
						<h2>{item.title}</h2>
						<p>
							Автор: <a href={item.author.url}>{item.author.tag}</a>
						</p>
						<p>Ціна:{item.price} грн</p>
						<p>Наявність: {item.quantity} </p>
						<button type='button'>Додати в кошик</button>
					</Item>
				)
			})}
		</List>
		</>
	)
}
