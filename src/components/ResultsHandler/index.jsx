import React from 'react';
import styled from 'styled-components';
import { MenuItem } from '@material-ui/core';
import {
	ResultsHandlerSection,
	FilterItem,
	SortTitle,
	StyledFormControl,
	StyledSelect,
} from './styled.results-handler';

const ResultsHandlerComponent = ({ filter, sort, onFilterChange, className }) => {
	const [sortValue, setSortValue] = React.useState(sort[0]);

	const handleChange = (event) => {
		setSortValue(event.target.value);
	};

	return (
		<div className={className}>
			<ResultsHandlerSection>
				{filter.map((elem) => (
					<FilterItem
						key={elem}
						onClick={() => onFilterChange(elem)}
					>
						{elem}
					</FilterItem>
				))}
			</ResultsHandlerSection>
			<ResultsHandlerSection>
				<SortTitle>Sort By</SortTitle>
				<StyledFormControl>
					<StyledSelect value={sortValue} onChange={handleChange}>
						{sort.map((item) => (
							<MenuItem key={item} value={item}>
								{item}
							</MenuItem>
						))}
					</StyledSelect>
				</StyledFormControl>
			</ResultsHandlerSection>
		</div>
	);
};

const ResultsHandler = styled(ResultsHandlerComponent)`
	display: flex;
	justify-content: space-between;
	color: #fff;
	text-transform: uppercase;
	padding: 15px 0;
	border-bottom: 3px solid #555;
`;

export default ResultsHandler;
