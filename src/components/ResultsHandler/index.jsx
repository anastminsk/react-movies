import React from 'react';
import styled from 'styled-components';
import {
	ResultsHandlerSection,
	FilterItem,
	SortTitle
} from './styled.results-handler';

const ResultsHandlerComponent = ({ filter, sort, className }) => (
	<div className={className}>
		<ResultsHandlerSection>
			{filter.map((elem) => (
				<FilterItem key={elem}>{elem}</FilterItem>
			))}
		</ResultsHandlerSection>
		<ResultsHandlerSection>
			<SortTitle>Sort By</SortTitle>
			<select>
				{sort.map((value) => (
					<option key={value}>{value}</option>
				))}
			</select>
		</ResultsHandlerSection>
	</div>
);

const ResultsHandler = styled(ResultsHandlerComponent)`
	display: flex;
	justify-content: space-between;
	color: #fff;
	text-transform: uppercase;
	padding: 15px 0;
	border-bottom: 3px solid #555;
`;

export default ResultsHandler;
