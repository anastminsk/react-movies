import React, { Fragment } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
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

const initialFormData = {
	title: '',
	genres: [],
	overview: '',
	poster_path: '',
	runtime: 0,
	release_date: '',
	tagline: '',
	vote_average: 0,
};

const validationSchema = yup.object().shape({
	title: yup.string().required('Title is a required field'),
	genres: yup.array().min(1).required('Genres is a required field'),
	overview: yup.string().required('Overview is a required field'),
	poster_path: yup
		.string()
		.matches(
			/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm,
			'Poster path must be valid!'
		)
		.required('Poster path is a required field'),
	runtime: yup.number().min(0).required('Runtime is a required field'),
	release_date: yup.string().required('Release date is a required field'),
	tagline: yup.string().required('Tagline is a required field'),
	vote_average: yup
		.number()
		.min(0)
		.required('Vote average is a required field'),
});

const ModalAddEditContent = ({
	closeModal,
	onModalSubmit,
	editableMode,
	formData,
}) => {
	const movieID = editableMode ? formData?.id : '';
	const formik = useFormik({
		initialValues: editableMode ? formData : initialFormData,
		validationSchema: validationSchema,
		onSubmit: (values) => {
			onModalSubmit({
				...values,
				runtime: +values.runtime,
				vote_average: +values.vote_average,
			});
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
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
					value={formik.values.title}
					fullWidth
					onChange={formik.handleChange}
					error={formik.touched.title && Boolean(formik.errors.title)}
					helperText={formik.touched.title && formik.errors.title}
				/>
				<StyledTextField
					type="date"
					label="Release date"
					name="release_date"
					value={formik.values.release_date}
					fullWidth
					InputLabelProps={{
						shrink: true,
					}}
					onChange={formik.handleChange}
					error={formik.touched.release_date && Boolean(formik.errors.release_date)}
					helperText={formik.touched.release_date && formik.errors.release_date}
				/>
				<StyledTextField
					label="Poster path"
					name="poster_path"
					value={formik.values.poster_path}
					fullWidth
					onChange={formik.handleChange}
					error={formik.touched.poster_path && Boolean(formik.errors.poster_path)}
					helperText={formik.touched.poster_path && formik.errors.poster_path}
				/>
				<StyledFormControl fullWidth>
					<InputLabel id="genres-label">Genres</InputLabel>
					<Select
						name="genres"
						multiple
						labelId="genres-label"
						value={formik.values.genres}
						onChange={formik.handleChange}
						input={<Input name="genres" />}
						renderValue={(selected) => selected.join(', ')}
					>
						{GENRES_OPTIONS.map((item) => (
							<MenuItem key={item} value={item}>
								<Checkbox checked={formik.values.genres.indexOf(item) > -1} />
								<ListItemText primary={item} />
							</MenuItem>
						))}
					</Select>
				</StyledFormControl>
				<StyledTextField
					label="Overview"
					name="overview"
					value={formik.values.overview}
					fullWidth
					onChange={formik.handleChange}
					error={formik.touched.overview && Boolean(formik.errors.overview)}
					helperText={formik.touched.overview && formik.errors.overview}
				/>
				<StyledTextField
					label="Runtime"
					name="runtime"
					value={formik.values.runtime}
					fullWidth
					onChange={formik.handleChange}
					error={formik.touched.runtime && Boolean(formik.errors.runtime)}
					helperText={formik.touched.runtime && formik.errors.runtime}
				/>
				<StyledTextField
					label="Tagline"
					name="tagline"
					value={formik.values.tagline}
					fullWidth
					onChange={formik.handleChange}
					error={formik.touched.tagline && Boolean(formik.errors.tagline)}
					helperText={formik.touched.tagline && formik.errors.tagline}
				/>
				<StyledTextField
					label="Vote average"
					name="vote_average"
					value={formik.values.vote_average}
					fullWidth
					onChange={formik.handleChange}
					error={formik.touched.vote_average && Boolean(formik.errors.vote_average)}
					helperText={formik.touched.vote_average && formik.errors.vote_average}
				/>
			</Fragment>
			<ButtonsWrapper>
				<ResetButton variant="outlined" onClick={closeModal}>
					Reset
				</ResetButton>
				<SubmitButton variant="outlined" type="submit">
					Submit
				</SubmitButton>
			</ButtonsWrapper>
		</form>
	);
};

export default ModalAddEditContent;
