import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const AppWrapper = styled.div`
	max-width: 1024px;
	margin: 0 auto;
`;

const App = () => {
	const [movieId, setMovieId] = useState(null);
	const handleMovieCardClick = (movieId) => setMovieId(movieId);

	return (
		<AppWrapper>
			<Header movieDetailsId={movieId} />
			<MainContent onMovieCardClick={handleMovieCardClick} />
			<Footer />
		</AppWrapper>
	);
};

export default App;
