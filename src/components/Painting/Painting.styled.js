import styled from 'styled-components'

export const List = styled.ul`
	list-style: none;
	display: flex;
	gap: 15px;
	flex-wrap: wrap;
`
export const Item = styled.li`
	flex-basis: calc((100% - 15px * 6) / 3);

	&:hover {
		background-color: aquamarine;
	}
	svg {
		color: red;
	}
`
