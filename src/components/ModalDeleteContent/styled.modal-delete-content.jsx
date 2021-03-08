import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export const ModalDeleteDescription = styled.p`
	color: #fff;
	font-size: 20px;
`;

export const StyledButton = withStyles({
	root: {
		backgroundColor: '#f65261',
		'&:hover': {
			backgroundColor: '#f65261',
		},
	},
	label: {
		textTransform: 'uppercase',
		color: '#fff',
	},
})(Button);

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 30px;
`;
