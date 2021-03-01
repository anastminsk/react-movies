import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const AppWrapper = styled.div`
	max-width: 1024px;
	margin: 0 auto;
`;

function App() {
	return (
		<AppWrapper>
			<Header />
			<MainContent />
			<Footer />
		</AppWrapper>
	);
}

export default App;
