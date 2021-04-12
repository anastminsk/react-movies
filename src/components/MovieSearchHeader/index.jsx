import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createMovie, searchMovie } from '../../redux/actions';
import Logo from '../Logo';
import Modal from '../Modal';
import ModalAddEditContent from '../ModalAddEditContent';
import AddIcon from '@material-ui/icons/Add';
import headerBackground from '../../assets/images/header-bg.png';
import {
	HeaderTop,
	HeaderAddButton,
	HeaderSearchBlock,
	HeaderTitle,
	HeaderSearchLine,
	HeaderSearchInput,
	HeaderSearchButton,
} from './styled.movie-search-header';

const MovieSearchHeaderComponent = ({
	className,
	createMovie,
	searchMovie,
}) => {
	let history = useHistory();
	let match = useParams();
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [inputValue, setInputValue] = useState(match.searchQuery || '');

	const handleModalVisibility = () => {
		setIsModalVisible(!isModalVisible);
	};

	const handleSearch = () => {
		searchMovie(inputValue);
		history.push(inputValue ? `/search/${inputValue}` : '/not-found');
	};

	return (
		<header className={className}>
			<HeaderTop>
				<Logo />
				<HeaderAddButton
					variant="contained"
					startIcon={<AddIcon />}
					onClick={handleModalVisibility}
				>
					Add movie
				</HeaderAddButton>
			</HeaderTop>
			<HeaderSearchBlock>
				<HeaderTitle>FIND YOUR MOVIE</HeaderTitle>
				<HeaderSearchLine>
					<HeaderSearchInput
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						type="text"
						placeholder="What do you want to watch?"
					/>
					<HeaderSearchButton
						variant="contained"
						onClick={handleSearch}
					>
						Search
					</HeaderSearchButton>
				</HeaderSearchLine>
			</HeaderSearchBlock>
			<Modal
				showModal={isModalVisible}
				closeModal={handleModalVisibility}
				title={'ADD MOVIE'}
			>
				<ModalAddEditContent
					onModalSubmit={(data) => {
						createMovie(data);
						handleModalVisibility();
					}}
					closeModal={handleModalVisibility}
					editableMode={false}
				/>
			</Modal>
		</header>
	);
};

const MovieSearchHeader = styled(MovieSearchHeaderComponent)`
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

const mapDispatchToProps = (dispatch) => ({
	createMovie: (data) => dispatch(createMovie(data)),
	searchMovie: (data) => dispatch(searchMovie(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearchHeader);
