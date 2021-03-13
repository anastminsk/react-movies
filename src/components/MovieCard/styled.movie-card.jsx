import styled from 'styled-components';
import Menu from '@material-ui/core/Menu';
import MovieMenu from '../MovieMenu';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

export const MovieCardContainer = styled.div`
	width: calc(100% / 3 - 25px);
`;

export const MovieImageSection = styled.div`
	position: relative;
	&:hover {
		cursor: pointer;
		${MovieMenu} {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;

export const MovieImage = styled.img`
	width: 100%;
	height: 400px;
`;

export const MovieInfoSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 10px 10px 30px;
	color: #c0c0c0;
`;

export const MovieTitle = styled.p`
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 5px;
`;

export const MovieGenre = styled.p`
	font-size: 14px;
`;

export const MovieDate = styled.p`
	font-size: 14px;
	padding: 3px 8px;
	border: 1px solid #c0c0c0;
	border-radius: 10%;
`;

export const StyledMenu = withStyles({
	paper: {
		color: '#fff',
		backgroundColor: '#232323',
		'& .MuiMenuItem-root:hover': {
			backgroundColor: '#f65261',
		},
	},
})(Menu);

export const StyledIconButton = withStyles({
	root: {
		color: '#fff',
		width: '100%',
		height: '100%',
	},
})(IconButton);
