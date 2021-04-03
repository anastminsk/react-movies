import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Logo from '../Logo';
import Modal from '../Modal';
import HeaderSearchBlock from '../HeaderSearchBlock';
import ModalAddEditContent from '../ModalAddEditContent';
import MovieDetails from '../MovieDetails';
import AddIcon from '@material-ui/icons/Add';
import headerBackground from '../../assets/images/header-bg.png';
import { HeaderTop, HeaderAddButton, StyledSearchIcon } from './styled.header';
import { createMovie } from '../../redux/actions';

const HeaderComponent = ({ movieDetailsId, className, createMovie }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isMovieDetailsVisible, setIsMovieDetailsVisible] = useState(false);

	const handleModalVisibility = () => {
		setIsModalVisible(!isModalVisible);
	};

	const handleModalSubmit = (data) => {
		createMovie(data);
		handleModalVisibility();
	}

	const handleSearchIconClick = () => {
		setIsMovieDetailsVisible(false);
	};

	useEffect(
		() =>
			movieDetailsId
				? setIsMovieDetailsVisible(true)
				: setIsMovieDetailsVisible(false),
		[movieDetailsId]
	);

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
						onClick={handleModalVisibility}
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
				closeModal={handleModalVisibility}
				title={'ADD MOVIE'}
			>
				<ModalAddEditContent
					closeModal={handleModalVisibility}
					onModalSubmit={handleModalSubmit}
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

const mapDispatchToProps = (dispatch) => ({
	createMovie: (data) => dispatch(createMovie(data)),
});

export default connect(null, mapDispatchToProps)(Header);
