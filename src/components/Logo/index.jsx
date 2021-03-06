import React from 'react';
import styled from 'styled-components';

const LogoComponent = ({ className }) => (
	<span className={className}>
		<b>netflix</b>roulette
	</span>
);

const Logo = styled(LogoComponent)`
	font-size: 20px;
	color: #f65261;
	letter-spacing: 1px;
`;

export default Logo;
