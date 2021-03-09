import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MovieMenu from '../MovieMenu';
import Modal from '../Modal';
import ModalAddEditContent from '../ModalAddEditContent';
import ModalDeleteContent from '../ModalDeleteContent';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import {
	MovieCardContainer,
	MovieImageSection,
	MovieImage,
	MovieInfoSection,
	MovieTitle,
	MovieGenre,
	MovieDate,
	StyledMenu,
	StyledIconButton,
} from './styled.movie-card';

const MovieCard = (props) => {
	const { title, genre, releaseDate, image } = props;
	const [isEditModalVisible, setIsEditModalVisible] = useState(false);
	const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const editModalHandler = (e) => {
		e.preventDefault();
		setIsEditModalVisible(!isEditModalVisible);
	};

	const deleteModalHandler = (e) => {
		e.preventDefault();
		setIsDeleteModalVisible(!isDeleteModalVisible);
	};

	const menuHandleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const menuHandleClose = () => {
		setAnchorEl(null);
	};

	const onEditMenuItemClick = (e) => {
		editModalHandler(e);
		menuHandleClose();
	};

	const onDeleteMenuItemClick = (e) => {
		deleteModalHandler(e);
		menuHandleClose();
	};

	return (
		<MovieCardContainer>
			<MovieImageSection>
				<MovieImage src={image} alt="movie-image" />
				<MovieMenu>
					<StyledIconButton aria-label="more menu" onClick={menuHandleClick}>
						<MoreVertIcon />
					</StyledIconButton>
					<StyledMenu
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={menuHandleClose}
					>
						<MenuItem onClick={onEditMenuItemClick}>Edit</MenuItem>
						<MenuItem onClick={onDeleteMenuItemClick}>
							Delete
						</MenuItem>
					</StyledMenu>
				</MovieMenu>
			</MovieImageSection>
			<MovieInfoSection>
				<div>
					<MovieTitle>{title}</MovieTitle>
					<MovieGenre>{genre}</MovieGenre>
				</div>
				<MovieDate>{releaseDate.slice(0, 4)}</MovieDate>
			</MovieInfoSection>
			<Modal
				showModal={isEditModalVisible}
				closeModal={editModalHandler}
				title={'EDIT MOVIE'}
			>
				<ModalAddEditContent
					closeModal={editModalHandler}
					formData={props}
					editableMode
				/>
			</Modal>
			<Modal
				showModal={isDeleteModalVisible}
				closeModal={deleteModalHandler}
				title={'DELETE MOVIE'}
			>
				<ModalDeleteContent closeModal={deleteModalHandler} />
			</Modal>
		</MovieCardContainer>
	);
};

MovieCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	genre: PropTypes.oneOf([
		'Comedy',
		'Documentary',
		'Horror',
		'Crime',
		'Action',
		'Drama',
	]).isRequired,
	overview: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	runTime: PropTypes.number.isRequired,
	releaseDate: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

MovieCard.defaultProps = {
	genre: 'Comedy',
	title: 'Just a Perfect Movie',
	overview: 'The Perfect Movie Overview',
	url: 'https://www.netflix.com/',
};

export default MovieCard;
