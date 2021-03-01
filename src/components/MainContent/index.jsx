import React from 'react';
import styled from 'styled-components';
import MoviesList from '../MoviesList';

const MainContentWrapper = styled.div`
	background-color: #232323;
	padding: 0 50px 30px;
	margin-top: 10px;
`;

function MainContent() {
	return (
		<MainContentWrapper>
			<MoviesList />
		</MainContentWrapper>
	);
}

export default MainContent;
