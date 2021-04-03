import React, { Fragment, useState } from 'react';
import {
	InputLabel,
	MenuItem,
	Select,
	Input,
	Checkbox,
	ListItemText,
} from '@material-ui/core';
import {
	StyledTextField,
	StyledFormControl,
	ResetButton,
	SubmitButton,
	ButtonsWrapper,
} from './styled.modal-add-edit-content';
import { GENRES_OPTIONS } from '../MainContent/model';

const ModalAddEditContent = ({
	closeModal,
	onModalSubmit,
	editableMode,
	formData,
}) => {
	const movieID = editableMode ? formData?.id : '';
	const [genres, setGenres] = useState(editableMode ? formData?.genres : []);
	const [title, setTitle] = useState(editableMode ? formData?.title : '');
	const [overview, setOverview] = useState(
		editableMode ? formData?.overview : ''
	);
	const [poster_path, setMovieUrl] = useState(
		editableMode ? formData?.poster_path : ''
	);
	const [runtime, setRuntime] = useState(
		editableMode ? formData?.runtime : ''
	);
	const [release_date, setReleaseDate] = useState(
		editableMode ? formData?.release_date : ''
	);
	const [tagline, setTagline] = useState(
		editableMode ? formData?.tagline : ''
	);
	const [vote_average, setVoteAverage] = useState(
		editableMode ? formData?.vote_average : ''
	);

	const handleChangeTitle = (event) => {
		setTitle(event.target.value);
	};
	const handleChangeGenres = (event) => {
		setGenres(event.target.value);
	};
	const handleChangeOverview = (event) => {
		setOverview(event.target.value);
	};
	const handleChangeMovieUrl = (event) => {
		setMovieUrl(event.target.value);
	};
	const handleChangeRuntime = (event) => {
		setRuntime(Number(event.target.value));
	};
	const handleChangeReleaseDate = (event) => {
		setReleaseDate(event.target.value);
	};
	const handleChangeTagline = (event) => {
		setTagline(event.target.value);
	};
	const handleChangeVoteAverage = (event) => {
		setVoteAverage(Number(event.target.value));
	};

	return (
		<form noValidate autoComplete="off">
			<Fragment>
				<StyledTextField
					style={{ display: editableMode ? 'block' : 'none' }}
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
					value={release_date}
					fullWidth
					InputLabelProps={{
						shrink: true,
					}}
					onChange={handleChangeReleaseDate}
				/>
				<StyledTextField
					label="Movie URL"
					name="movieUrl"
					value={poster_path}
					fullWidth
					onChange={handleChangeMovieUrl}
				/>
				<StyledFormControl fullWidth>
					<InputLabel id="genre-label">Genres</InputLabel>
					<Select
						multiple
						labelId="genre-label"
						value={genres}
						onChange={handleChangeGenres}
						input={<Input />}
						renderValue={(selected) => selected.join(', ')}
					>
						{GENRES_OPTIONS.map((item) => (
							<MenuItem key={item} value={item}>
								<Checkbox checked={genres.indexOf(item) > -1} />
								<ListItemText primary={item} />
							</MenuItem>
						))}
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
					value={runtime}
					fullWidth
					onChange={handleChangeRuntime}
				/>
				<StyledTextField
					label="Tagline"
					name="tagline"
					value={tagline}
					fullWidth
					onChange={handleChangeTagline}
				/>
				<StyledTextField
					label="VoteAverage"
					name="voteAverage"
					value={vote_average}
					fullWidth
					onChange={handleChangeVoteAverage}
				/>
			</Fragment>
			<ButtonsWrapper>
				<ResetButton variant="outlined" onClick={closeModal}>
					Reset
				</ResetButton>
				<SubmitButton
					variant="outlined"
					onClick={() =>
						onModalSubmit({
							...formData,
							genres,
							title,
							overview,
							poster_path,
							runtime,
							release_date,
							tagline,
							vote_average,
						})
					}
				>
					Submit
				</SubmitButton>
			</ButtonsWrapper>
		</form>
	);
};

export default ModalAddEditContent;
