import React, { Fragment, useState } from 'react';
import {
	InputLabel,
	MenuItem,
	Select,
} from '@material-ui/core';
import {
	StyledTextField,
	StyledFormControl,
	ResetButton,
	SubmitButton,
	ButtonsWrapper,
} from './styled.modal-add-edit-content';

const ModalAddEditContent = ({ closeModal, formData, editableMode }) => {
	const movieID = editableMode ? formData?.id : '';
	const [genre, setGenre] = useState(
		editableMode ? formData?.genre : 'comedy'
	);
	const [title, setTitle] = useState(
		editableMode ? formData?.title : 'Title'
	);
	const [overview, setOverview] = useState(
		editableMode ? formData?.overview : 'Overview'
	);
	const [movieURL, setMovieUrl] = useState(
		editableMode ? formData?.url : 'Movie URL'
	);
	const [runTime, setRunTime] = useState(
		editableMode ? formData?.runTime : 'Runtime'
	);
	const [releaseDate, setReleasedate] = useState(
		editableMode ? formData?.releaseDate : ''
	);

	const handleChangeTitle = (event) => {
		setTitle(event.target.value);
	};
	const handleChangeGenre = (event) => {
		setGenre(event.target.value);
	};
	const handleChangeOverview = (event) => {
		setOverview(event.target.value);
	};
	const handleChangeMovieUrl = (event) => {
		setMovieUrl(event.target.value);
	};
	const handleChangeRunTime = (event) => {
		setRunTime(event.target.value);
	};
	const handleChangeReleaseDate = (event) => {
		setReleasedate(event.target.value);
	};

	return (
		<form noValidate autoComplete="off">
			<Fragment>
				<StyledTextField style={{display: editableMode ? 'block' : 'none'}}
					label="Movie ID"
					name="movieID"
					value={movieID}
					fullWidth
				/>
				<StyledTextField
					label="Title"
					name="title"
					value={title}
					fullWidth
					onChange={handleChangeTitle}
				/>
				<StyledTextField
					type="date"
					label="Release date"
					name="releaseDate"
					value={releaseDate}
					fullWidth
					InputLabelProps={{
						shrink: true,
					}}
					onChange={handleChangeReleaseDate}
				/>
				<StyledTextField
					label="Movie URL"
					name="movieUrl"
					value={movieURL}
					fullWidth
					onChange={handleChangeMovieUrl}
				/>
				<StyledFormControl fullWidth>
					<InputLabel>Genre</InputLabel>
					<Select
						value={genre}
						onChange={handleChangeGenre}
					>
						<MenuItem value={'comedy'}>Comedy</MenuItem>
						<MenuItem value={'documentary'}>Documentary</MenuItem>
						<MenuItem value={'horror'}>Horror</MenuItem>
						<MenuItem value={'crime'}>Crime</MenuItem>
						<MenuItem value={'action'}>Action</MenuItem>
						<MenuItem value={'drama'}>Drama</MenuItem>
					</Select>
				</StyledFormControl>
				<StyledTextField
					label="Overview"
					name="overview"
					value={overview}
					fullWidth
					onChange={handleChangeOverview}
				/>
				<StyledTextField
					label="Runtime"
					name="runtime"
					value={runTime}
					fullWidth
					onChange={handleChangeRunTime}
				/>
			</Fragment>
			<ButtonsWrapper>
				<ResetButton variant="outlined" onClick={closeModal}>
					Reset
				</ResetButton>
				<SubmitButton
					variant="outlined"
					onClick={() => {
						console.log('Submit clicked');
					}}
				>
					Submit
				</SubmitButton>
			</ButtonsWrapper>
		</form>
	);
};

export default ModalAddEditContent;
