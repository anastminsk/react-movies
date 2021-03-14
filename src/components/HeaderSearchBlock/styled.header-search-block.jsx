import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const HeaderTitle = styled.p`
	color: #fff;
	font-size: 44px;
	padding-bottom: 20px;
`;

export const HeaderSearchLine = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const HeaderSearchInput = styled.input`
	border: none;
	border-radius: 5px;
	padding: 18px;
	margin-right: 10px;
	background: #232323;
	font-size: 18px;
	color: #fff;
	flex-grow: 1;
`;

export const HeaderSearchButton = withStyles({
	root: {
		backgroundColor: '#f65261',
		fontSize: '18px',
		marginLeft: '5px',
		width: '200px',
		'&:hover': {
			backgroundColor: '#f65261',
		},
	},
	label: {
		color: '#fff',
	},
})(Button);
