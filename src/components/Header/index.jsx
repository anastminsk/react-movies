import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import Modal from '../Modal';
import HeaderSearchBlock from '../HeaderSearchBlock';
import ModalAddEditContent from '../ModalAddEditContent';
import MovieDetails from '../MovieDetails';
import AddIcon from '@material-ui/icons/Add';
import headerBackground from '../../assets/images/header-bg.png';
import { HeaderTop, HeaderAddButton, StyledSearchIcon } from './styled.header';

const HeaderComponent = ({ movieDetailsId, className }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isMovieDetailsVisible, setIsMovieDetailsVisible] = useState(false);

	const modalHandler = (e) => {
		e.preventDefault();
		setIsModalVisible(!isModalVisible);
	};

	useEffect(
		() =>
			movieDetailsId
				? setIsMovieDetailsVisible(true)
				: setIsMovieDetailsVisible(false),
		[movieDetailsId]
	);

	const handleSearchIconClick = () => {
		setIsMovieDetailsVisible(false);
	};

	return (
		<header className={className}>
			<HeaderTop>
				<Logo />
				{isMovieDetailsVisible ? (
					<StyledSearchIcon onClick={handleSearchIconClick} />
				) : (
					<HeaderAddButton
						variant="contained"
						startIcon={<AddIcon />}
						onClick={modalHandler}
					>
						Add movie
					</HeaderAddButton>
				)}
			</HeaderTop>
			{isMovieDetailsVisible ? (
				<MovieDetails id={movieDetailsId}></MovieDetails>
			) : (
				<HeaderSearchBlock />
			)}
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

const Header = styled(HeaderComponent)`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 450px;
	background-image: url(${headerBackground});
	background-position: center;
	background-size: cover;
	box-shadow: 50px 150px 100px #232323 inset;
`;

export default Header;
