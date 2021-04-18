import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

export const HeaderTop = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px 40px;
`;

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
