import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export const NotFound = styled.div`
	font-size: 200px;
	font-weight: bold;
	text-shadow: -10px 0px 0px #f65261;
`;

export const NotFoundGoBackBtn = styled.button`
	color: #f65261;
	border: 1px solid #f65261;
	background: #555;
	border-radius: 5px;
	padding: 15px 35px;
	font-size: 18px;
	cursor: pointer;
`;

export const GoBackButton = withStyles({
	root: {
		borderColor: '#f65261',
		background: 'transparent',
		marginRight: '10px',
	},
	label: {
		color: '#f65261',
	},
})(Button);
