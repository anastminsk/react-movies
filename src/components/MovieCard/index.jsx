import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MovieMenu from '../MovieMenu';
import Modal from '../Modal';
import ModalAddEditContent from '../ModalAddEditContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
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
} from './styled.movie-card';

const MovieCard = (props) => {
	const { id, title, genre, overview, url, runTime, releaseDate, image } = props;
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const modalHandler = (e) => {
		e.preventDefault();
		setIsModalVisible(!isModalVisible);
	};

	const menuHandleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const menuHandleClose = () => {
		setAnchorEl(null);
	};

	const editClick = (e) => {
		modalHandler(e);
		menuHandleClose();
	}

	return (
		<MovieCardContainer>
			<MovieImageSection>
				<MovieImage src={image} alt="movie-image" />
				<MovieMenu>
					<FontAwesomeIcon
						icon={faEllipsisV}
						onClick={menuHandleClick}
					/>
					<StyledMenu
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={menuHandleClose}
					>
						<MenuItem onClick={editClick}>Edit</MenuItem>
						<MenuItem onClick={menuHandleClose}>Delete</MenuItem>
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
				showModal={isModalVisible}
				closeModal={modalHandler}
				title={'EDIT MOVIE'}
			>
				<ModalAddEditContent
					closeModal={modalHandler}
					formData={props}
					editableMode
				/>
			</Modal>
		</MovieCardContainer>
	);
};

MovieCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	genre: PropTypes.string.isRequired,
	overview: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	runTime: PropTypes.number.isRequired,
	releaseDate: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

MovieCard.defaultProps = {
	genre: 'comedy',
	title: 'Just a Perfect Movie',
	overview: 'The Perfect Movie Overview',
	url: 'https://www.netflix.com/',
};

export default MovieCard;
