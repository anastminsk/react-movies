import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from '../Logo/index';

const HeaderTop = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px 40px;
`;

const HeaderAddBtn = styled.button`
	color: #f65261;
	border: none;
	background: #555;
	border-radius: 5px;
	padding: 15px 35px;
	font-size: 18px;
	cursor: pointer;
`;

const HeaderSearchBlock = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 20px 100px;
`;

const HeaderTitle = styled.p`
	color: #fff;
	font-size: 44px;
	padding-bottom: 20px;
`;

const HeaderSearchLine = styled.div`
	display: flex;
	justify-content: space-between;
`;

const HeaderSearchInput = styled.input`
	border: none;
	border-radius: 5px;
	padding: 18px;
	margin-right: 10px;
	background: #232323;
	font-size: 18px;
	color: #fff;
	flex-grow: 1;
`;

const HeaderSearchBtn = styled.button`
	background: #f65261;
	color: #fff;
	border: none;
	border-radius: 5px;
	padding: 15px 55px;
	font-size: 18px;
	cursor: pointer;
	margin-left: 5px;
`;

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
	background-image: url('../src/assets/images/header-bg.png');
	background-position: center;
	background-size: cover;
	box-shadow: 50px 150px 100px #232323 inset;
`;

export default Header;
