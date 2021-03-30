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

const ResultsHandlerComponent = ({ filters, sort, sortValue, onFilterChange, onSortingChange, className }) => {
	const handleSortingChange = (event) => {
		onSortingChange(event.target.value);
	};

	return (
		<div className={className}>
			<ResultsHandlerSection>
				{filters.map((elem) => (
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
					<StyledSelect value={sortValue} onChange={handleSortingChange}>
						{sort.map((item) => (
							<MenuItem key={item} value={item}>
								{item === 'release_date' ? 'Release Date' : 'Rating'}
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
