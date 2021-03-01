import React from 'react';
import styled from 'styled-components';
import ResultsHandler from '../ResultsHandler';
import MoviesList from '../MoviesList';
import { movies } from '../MoviesList/model';

const filter = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
const sort = ['Release Date', 'Genre', 'Title'];

const MainContentWrapper = styled.div`
	background-color: #232323;
	padding: 0 50px 30px;
	margin-top: 10px;
`;

const MoviesResults = styled.div`
	color: #fff;
	font-size: 18px;
	padding: 20px 0;
`;

const MoviesResultsNumber = styled.span`
	font-size: 22px;
	font-weight: bold;
	padding-right: 5px;
`;

function MainContent() {
	return (
		<MainContentWrapper>
			<ResultsHandler filter={filter} sort={sort} />
			<MoviesResults>
				<MoviesResultsNumber>{movies.length}</MoviesResultsNumber>
				<span>movies found</span>
			</MoviesResults>
			<MoviesList />
		</MainContentWrapper>
	);
}

export default MainContent;
