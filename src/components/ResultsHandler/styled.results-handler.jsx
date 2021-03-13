import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { FormControl, Select } from '@material-ui/core';

export const ResultsHandlerSection = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	select {
		font-size: 16px;
		text-transform: uppercase;
	}
`;

export const FilterItem = styled.div`
	margin-right: 20px;
	cursor: pointer;
`;

export const SortTitle = styled.span`
	color: #c0c0c0;
	margin-right: 20px;
`;

export const StyledFormControl = withStyles({
	root: {
		backgroundColor: '#424242',
		width: '150px',
		'& .MuiInput-root': {
			color: '#fff',
		},
		'& .MuiInput-underline:after': {
			borderBottom: 'none',
		},
	},
})(FormControl);

export const StyledSelect = withStyles({
	icon: {
		color: '#f65261',
	},
})(Select);
