import { StyledAlert } from "./Alert.styled";

export function Alert({ type }) {
	return <StyledAlert type={type}>{type}</StyledAlert>
}