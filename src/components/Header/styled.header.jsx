import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const HeaderTop = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px 40px;
`;

export const HeaderSearchBlock = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 20px 100px;
`;

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

export const HeaderAddButton = withStyles({
	root: {
		backgroundColor: '#555',
		fontSize: '18px',
		'&:hover': {
			backgroundColor: '#555',
		},
	},
	label: {
		color: '#f65261',
	},
})(Button);

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
