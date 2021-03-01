import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';

const AppWrapper = styled.div`
	max-width: 1024px;
	margin: 0 auto;
`;

function App() {
	return (
		<AppWrapper>
			<Header />
			<Footer />
		</AppWrapper>
	);
}

export default App;
