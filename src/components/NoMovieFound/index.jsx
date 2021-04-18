import React from 'react';
import styled from 'styled-components';

const NoMovieFoundComponent = ({ className }) => (
	<span className={className}>No Movie Found</span>
);

const NoMovieFound = styled(NoMovieFoundComponent)`
	font-size: 36px;
	color: #fff;
`;

export default NoMovieFound;
