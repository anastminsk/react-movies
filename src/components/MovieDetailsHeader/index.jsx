import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Logo from '../Logo';
import MovieDetails from '../MovieDetails';
import { HeaderTop, StyledSearchIcon } from './styled.movie-details-header';
import headerBackground from '../../assets/images/header-bg.png';

const MovieDetailsHeaderComponent = ({ className, search }) => {
	let history = useHistory();
	let match = useParams();
	return (
		<header className={className}>
			<HeaderTop>
				<Logo />
				<StyledSearchIcon
					onClick={() =>
						history.push(search ? `/search/${search}` : '/')
					}
				/>
			</HeaderTop>
			<MovieDetails id={match.id}></MovieDetails>
		</header>
	);
};

const MovieDetailsHeader = styled(MovieDetailsHeaderComponent)`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 450px;
	background-image: url(${headerBackground});
	background-position: center;
	background-size: cover;
	box-shadow: 50px 150px 100px #232323 inset;
`;

const mapStateToProps = (state) => ({
	search: state.movies.search,
});

export default connect(mapStateToProps)(MovieDetailsHeader);
