import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
	editMovie,
	deleteMovieById,
} from '../../redux/actions';
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
	const { id, title, genres, release_date, poster_path, editMovie, deleteMovieById } = props;
	const [isEditModalVisible, setIsEditModalVisible] = useState(false);
	const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);
	let history = useHistory();

	const editModalHandler = () => {
		setIsEditModalVisible(!isEditModalVisible);
	};

	const deleteModalHandler = () => {
		setIsDeleteModalVisible(!isDeleteModalVisible);
	};

	const menuHandleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const menuHandleClose = () => {
		setAnchorEl(null);
	};

	const onEditMenuItemClick = () => {
		editModalHandler();
		menuHandleClose();
	};

	const onDeleteMenuItemClick = () => {
		deleteModalHandler();
		menuHandleClose();
	};

	const modalSubmitHandler = (data) => {
		editMovie(data);
		editModalHandler();
	}

	const deleteMovieHandler = () => {
		deleteMovieById(id);
		deleteModalHandler();
	}

	return (
		<MovieCardContainer>
			<MovieImageSection>
				<MovieImage
					src={poster_path}
					alt="movie-image"
					onClick={() => history.push(`/movie/${id}`)}
				/>
				<MovieMenu>
					<StyledIconButton
						aria-label="more menu"
						onClick={menuHandleClick}
					>
						<MoreVertIcon />
					</StyledIconButton>
					<StyledMenu
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={menuHandleClose}
						getContentAnchorEl={null}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'center',
						}}
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
					<MovieGenre>{genres.join(', ')}</MovieGenre>
				</div>
				<MovieDate>{release_date.slice(0, 4)}</MovieDate>
			</MovieInfoSection>
			<Modal
				showModal={isEditModalVisible}
				closeModal={editModalHandler}
				title={'EDIT MOVIE'}
			>
				<ModalAddEditContent
					closeModal={editModalHandler}
					onModalSubmit={modalSubmitHandler}
					editableMode
					formData={props}
				/>
			</Modal>
			<Modal
				showModal={isDeleteModalVisible}
				closeModal={deleteModalHandler}
				title={'DELETE MOVIE'}
			>
				<ModalDeleteContent
					onDeleteMovie={deleteMovieHandler}
				/>
			</Modal>
		</MovieCardContainer>
	);
};

MovieCard.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
	release_date: PropTypes.string.isRequired,
	poster_path: PropTypes.string.isRequired,
	overview: PropTypes.string.isRequired,
	runtime: PropTypes.number.isRequired,
	revenue: PropTypes.number,
	budget: PropTypes.number,
	tagline: PropTypes.string,
	vote_average: PropTypes.number,
	vote_count: PropTypes.number,
};

MovieCard.defaultProps = {
	title: 'Just a Perfect Movie',
	genres: ['Comedy'],
	overview: 'The Perfect Movie Overview',
};

const mapDispatchToProps = (dispatch) => ({
	editMovie: (data) => dispatch(editMovie(data)),
	deleteMovieById: (id) => dispatch(deleteMovieById(id)),
});

export default connect(null, mapDispatchToProps)(MovieCard);
