import styled from 'styled-components'

function bgc(props) {
	switch (props.type) {
		case 'warning':
			return 'yellow'
		case 'success':
			return 'green'
		case 'error':
			return 'red'

		default:
			return 'gray'
	}
}

export const StyledAlert = styled.p`
	font-size: 48px;
	border: 2px solid black;
	background-color: ${props => {}};
`
