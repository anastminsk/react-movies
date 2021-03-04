import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import headerBackground from '../../assets/images/header-bg.png';
import {
	HeaderTop,
	HeaderAddBtn,
	HeaderSearchBlock,
	HeaderTitle,
	HeaderSearchLine,
	HeaderSearchInput,
	HeaderSearchBtn,
} from './styled.header';

const HeaderComponent = ({ className }) => {
	return (
		<header className={className}>
			<HeaderTop>
				<Logo />
				<HeaderAddBtn>+ ADD MOVIE</HeaderAddBtn>
			</HeaderTop>
			<HeaderSearchBlock>
				<HeaderTitle>FIND YOUR MOVIE</HeaderTitle>
				<HeaderSearchLine>
					<HeaderSearchInput
						type="text"
						placeholder="What do you want to watch?"
					/>
					<HeaderSearchBtn>SEARCH</HeaderSearchBtn>
				</HeaderSearchLine>
			</HeaderSearchBlock>
		</header>
	);
};

HeaderSearchInput.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
};

const Header = styled(HeaderComponent)`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 400px;
	background-image: url(${headerBackground});
	background-position: center;
	background-size: cover;
	box-shadow: 50px 150px 100px #232323 inset;
`;

export default Header;
