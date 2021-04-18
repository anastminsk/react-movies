import * as ACTIONS from './actionTypes';

const MOVIES_URL = 'http://localhost:4000/movies';

export const fetchMovies = () => (dispatch) => {
	dispatch(fetchMoviesStart());
	fetch(MOVIES_URL)
		.then((res) => res.json())
		.then((result) => dispatch(fetchMoviesSuccess(result?.data)))
		.catch((e) => dispatch(fetchMoviesError(e)));
};

export const fetchMoviesStart = () => ({
	type: ACTIONS.FETCH_MOVIES_START,
});

export const fetchMoviesSuccess = (movies) => ({
	type: ACTIONS.FETCH_MOVIES_SUCCESS,
	movies,
});

export const fetchMoviesError = (error) => ({
	type: ACTIONS.FETCH_MOVIES_ERROR,
	error,
});

export const fetchMovieById = (movieId) => (dispatch) => {
	dispatch(fetchMovieStart());
	fetch(`${MOVIES_URL}/${movieId}`)
		.then((res) => res.json())
		.then((result) => dispatch(fetchMovieSuccess(result)))
		.catch((e) => dispatch(fetchMovieError(e)));
};

export const fetchMovieStart = () => ({
	type: ACTIONS.FETCH_MOVIE_START,
});

export const fetchMovieSuccess = (currentMovie) => ({
	type: ACTIONS.FETCH_MOVIE_SUCCESS,
	currentMovie,
});

export const fetchMovieError = (error) => ({
	type: ACTIONS.FETCH_MOVIE_ERROR,
	error,
});

export const createMovie = (data) => (dispatch) => {
	dispatch(createMovieStart());
	fetch(MOVIES_URL, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res) => res.json())
		.then((result) => dispatch(createMovieSuccess(result)))
		.catch((e) => dispatch(createMovieError(e)));
};

export const createMovieStart = () => ({
	type: ACTIONS.CREATE_MOVIE_START,
});

export const createMovieSuccess = (currentMovie) => ({
	type: ACTIONS.CREATE_MOVIE_SUCCESS,
	currentMovie,
});

export const createMovieError = (error) => ({
	type: ACTIONS.CREATE_MOVIE_ERROR,
	error,
});

export const editMovie = (data) => (dispatch) => {
	dispatch(editMovieStart());
	fetch(MOVIES_URL, {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res) => res.json())
		.then((result) => dispatch(editMovieSuccess(result)))
		.catch((e) => dispatch(editMovieError(e)));
};

export const editMovieStart = () => ({
	type: ACTIONS.EDIT_MOVIE_START,
});

export const editMovieSuccess = (movie) => ({
	type: ACTIONS.EDIT_MOVIE_SUCCESS,
	movie,
});

export const editMovieError = (error) => ({
	type: ACTIONS.EDIT_MOVIE_ERROR,
	error,
});

export const deleteMovieById = (movieId) => (dispatch) => {
	dispatch(deleteMovieStart());
	fetch(`${MOVIES_URL}/${movieId}`, {
		method: 'DELETE',
	})
		.then(() => dispatch(deleteMovieSuccess(movieId)))
		.catch((e) => dispatch(deleteMovieError(e)));
};

export const deleteMovieStart = () => ({
	type: ACTIONS.DELETE_MOVIE_START,
});

export const deleteMovieSuccess = (id) => ({
	type: ACTIONS.DELETE_MOVIE_SUCCESS,
	id,
});

export const deleteMovieError = (error) => ({
	type: ACTIONS.DELETE_MOVIE_ERROR,
	error,
});

export const filterMovies = (filter) => (dispatch, getState) => {
	const filterParams = filter && filter === 'All' ? null : `filter=${filter}`;
	const sortParams = `sortOrder=desc&sortBy=${getState().movies.sorting}`;
	const searchParams = getState().movies.search
		? `search=${getState().movies.search}&searchBy=title`
		: null;
	const paramsString = [searchParams, filterParams, sortParams]
		.filter((el) => el !== null)
		.join('&');
	dispatch(filterMoviesStart());
	fetch(`${MOVIES_URL}?${paramsString}`)
		.then((res) => res.json())
		.then((result) => dispatch(filterMoviesSuccess(result?.data, filter)))
		.catch((e) => dispatch(filterMoviesError(e)));
};

export const filterMoviesStart = () => ({
	type: ACTIONS.FILTER_MOVIES_START,
});

export const filterMoviesSuccess = (movies, filter) => ({
	type: ACTIONS.FILTER_MOVIES_SUCCESS,
	movies,
	filter,
});

export const filterMoviesError = (error) => ({
	type: ACTIONS.FILTER_MOVIES_ERROR,
	error,
});

export const sortMovies = (sorting) => (dispatch, getState) => {
	const sortParams = `sortOrder=desc&sortBy=${sorting}`;
	const filterParams =
		getState().movies.filter === 'All'
			? null
			: `filter=${getState().movies.filter}`;
	const searchParams = getState().movies.search
		? `search=${getState().movies.search}&searchBy=title`
		: null;
	const paramsString = [searchParams, filterParams, sortParams]
		.filter((el) => el !== null)
		.join('&');
	dispatch(sortMoviesStart());
	fetch(`${MOVIES_URL}?${paramsString}`)
		.then((res) => res.json())
		.then((result) => dispatch(sortMoviesSuccess(result?.data, sorting)))
		.catch((e) => dispatch(sortMoviesError(e)));
};

export const sortMoviesStart = () => ({
	type: ACTIONS.SORT_MOVIES_START,
});

export const sortMoviesSuccess = (movies, sorting) => ({
	type: ACTIONS.SORT_MOVIES_SUCCESS,
	movies,
	sorting,
});

export const sortMoviesError = (error) => ({
	type: ACTIONS.SORT_MOVIES_ERROR,
	error,
});

export const searchMovie = (search) => (dispatch, getState) => {
	const searchParams = search ? `search=${search}&searchBy=title` : null;
	const sortParams = `sortOrder=desc&sortBy=${getState().movies.sorting}`;
	const filterParams =
		getState().movies.filter === `All`
			? null
			: `filter=${getState().movies.filter}`;
	const paramsString = [searchParams, filterParams, sortParams]
		.filter((el) => el !== null)
		.join('&');
	dispatch(searchMovieStart());
	fetch(`${MOVIES_URL}?${paramsString}`)
		.then((res) => res.json())
		.then((result) => dispatch(searchMovieSuccess(result?.data, search)))
		.catch((e) => dispatch(searchMovieError(e)));
};

export const searchMovieStart = () => ({
	type: ACTIONS.SEARCH_MOVIE_START,
});

export const searchMovieSuccess = (movies, search) => ({
	type: ACTIONS.SEARCH_MOVIE_SUCCESS,
	movies,
	search,
});

export const searchMovieError = (error) => ({
	type: ACTIONS.SEARCH_MOVIE_ERROR,
	error,
});
