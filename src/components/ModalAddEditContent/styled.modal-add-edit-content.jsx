import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import {
	Button,
	FormControl,
	TextField,
} from '@material-ui/core';

export const StyledTextField = withStyles({
	root: {
		backgroundColor: '#555',
		marginBottom: '15px',
		'& .MuiInput-root': {
			color: '#fff',
		},
		'& .MuiInputLabel-root': {
			color: '#f65261',
			textTransform: 'uppercase',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: '#f65261',
		},
	},
})(TextField);

export const StyledFormControl = withStyles({
	root: {
		backgroundColor: '#555',
		marginBottom: '15px',
		'& .MuiInput-root': {
			color: '#fff',
		},
		'& .MuiInputLabel-root': {
			color: '#f65261',
			textTransform: 'uppercase',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: '#f65261',
		},
	},
})(FormControl);

export const ResetButton = withStyles({
	root: {
		borderColor: '#f65261',
		background: 'transparent',
		marginRight: '10px',
	},
	label: {
		color: '#f65261',
	},
})(Button);

export const SubmitButton = withStyles({
	root: {
		backgroundColor: '#f65261',
		'&:hover': {
			backgroundColor: '#f65261',
		},
	},
	label: {
		color: '#fff',
	},
})(Button);

export const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 15px;
`;
