import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MovieCardContainer = styled.div`
	width: calc(100% / 3 - 25px);
`;

const MovieMenu = styled.img`
	position: absolute;
	top: 10px;
	right: 10px;
	background: #fff;
	width: 35px;
	height: 35px;
	transform: rotate(90deg);
	border-radius: 50%;
	display: none;
`;

const MovieImageSection = styled.div`
	position: relative;

	&:hover {
		cursor: pointer;
	}

	&:hover ${MovieMenu} {
		display: block;
	}
`;

const MovieImage = styled.img`
	width: 100%;
	height: 400px;
`;

const MovieInfoSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 10px 10px 30px;
`;

const MovieTitle = styled.p`
	font-size: 16px;
	font-weight: bold;
	color: #ccc;
	margin-bottom: 5px;
`;

const MovieGenre = styled.p`
	font-size: 14px;
	color: #ccc;
`;

const MovieDate = styled.p`
	font-size: 14px;
	color: #ccc;
	padding: 3px 8px;
	border: 1px solid #ccc;
	border-radius: 10%;
`;

const MovieCard = ({ title, genre, date, image }) => {
	return (
		<MovieCardContainer>
			<MovieImageSection>
				<MovieImage src={image} alt="movie-image" />
				<MovieMenu src="../src/assets/images/dots-icon.png" alt="dots-icon" />
			</MovieImageSection>
			<MovieInfoSection>
				<div>
					<MovieTitle>{title}</MovieTitle>
					<MovieGenre>{genre}</MovieGenre>
				</div>
				<MovieDate>{date}</MovieDate>
			</MovieInfoSection>
		</MovieCardContainer>
	);
};

MovieImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

MovieMenu.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default MovieCard;
