import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

const FooterContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 70px;
	background: #424242;
`;

const Footer = () => (
	<FooterContent>
		<Logo />
	</FooterContent>
);

export default Footer;
