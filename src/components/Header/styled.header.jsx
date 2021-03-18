import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

export const HeaderTop = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px 40px;
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

export const StyledSearchIcon = withStyles({
	root: {
		color: '#f65261',
		fontSize: '30px',
		transform: 'rotate(90deg)',
		'&:hover': {
			cursor: 'pointer',
		},
	},
})(SearchIcon);

