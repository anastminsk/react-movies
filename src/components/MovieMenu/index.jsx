import React from 'react';
import styled from 'styled-components';

const MovieMenuContainer = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

const MovieMenu = styled(MovieMenuContainer)`
	position: absolute;
	top: 15px;
	right: 15px;
	width: 35px;
	height: 35px;
	background-color: #232323;
	border-radius: 50%;
	display: none;
`;

export default MovieMenu;
