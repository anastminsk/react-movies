import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
	text-align: center;
`;

const HelloReact = styled.h1`
	color: #f65261;
	background-color: #232323;
`;

function App() {
	return (
		<Root>
			<HelloReact>Hello React!</HelloReact>
		</Root>
	);
}

export default App;
