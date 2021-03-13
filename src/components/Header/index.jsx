import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import Modal from '../Modal';
import ModalAddEditContent from '../ModalAddEditContent';
import AddIcon from '@material-ui/icons/Add';
import headerBackground from '../../assets/images/header-bg.png';
import {
	HeaderTop,
	HeaderSearchBlock,
	HeaderTitle,
	HeaderSearchLine,
	HeaderSearchInput,
	HeaderAddButton,
	HeaderSearchButton,
} from './styled.header';

const HeaderComponent = ({ className }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const modalHandler = (e) => {
		e.preventDefault();
		setIsModalVisible(!isModalVisible);
	};

	return (
		<header className={className}>
			<HeaderTop>
				<Logo />
				<HeaderAddButton
					variant="contained"
					startIcon={<AddIcon />}
					onClick={modalHandler}
				>
					Add movie
				</HeaderAddButton>
			</HeaderTop>
			<HeaderSearchBlock>
				<HeaderTitle>FIND YOUR MOVIE</HeaderTitle>
				<HeaderSearchLine>
					<HeaderSearchInput
						type="text"
						placeholder="What do you want to watch?"
					/>
					<HeaderSearchButton variant="contained">
						Search
					</HeaderSearchButton>
				</HeaderSearchLine>
			</HeaderSearchBlock>
			<Modal
				showModal={isModalVisible}
				closeModal={modalHandler}
				title={'ADD MOVIE'}
			>
				<ModalAddEditContent
					closeModal={modalHandler}
					editableMode={false}
				/>
			</Modal>
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
