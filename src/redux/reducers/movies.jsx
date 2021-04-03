import * as ACTIONS from '../actions/actionTypes';

const initialState = {
	movies: [],
	loading: false,
	error: null,
	currentMovie: null,
	filter: 'All',
	sorting: 'release_date',
};

const movies = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.FETCH_MOVIES_START:
			return {
				...state,
				loading: true,
			};
		case ACTIONS.FETCH_MOVIES_SUCCESS:
			return {
				...state,
				loading: false,
				movies: action.movies,
			};
		case ACTIONS.FETCH_MOVIES_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case ACTIONS.FETCH_MOVIE_START:
			return {
				...state,
				loading: true,
			};
		case ACTIONS.FETCH_MOVIE_SUCCESS:
			return {
				...state,
				loading: false,
				currentMovie: action.currentMovie,
			};
		case ACTIONS.FETCH_MOVIE_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case ACTIONS.CREATE_MOVIE_START:
			return {
				...state,
				loading: true,
			};
		case ACTIONS.CREATE_MOVIE_SUCCESS:
			return {
				...state,
				movies: [...state.movies, action.currentMovie],
			};
		case ACTIONS.CREATE_MOVIE_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case ACTIONS.EDIT_MOVIE_START:
			return {
				...state,
				loading: true,
			};
		case ACTIONS.EDIT_MOVIE_SUCCESS:
			return {
				...state,
				movies: state.movies.map((el) =>
					el.id === action.movie.id ? action.movie : el
				),
			};
		case ACTIONS.EDIT_MOVIE_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case ACTIONS.DELETE_MOVIE_START:
			return {
				...state,
				loading: true,
			};
		case ACTIONS.DELETE_MOVIE_SUCCESS:
			return {
				...state,
				movies: [...state.movies.filter((el) => el.id !== action.id)],
			};
		case ACTIONS.DELETE_MOVIE_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case ACTIONS.FILTER_MOVIES_START:
			return {
				...state,
				loading: true,
			};
		case ACTIONS.FILTER_MOVIES_SUCCESS:
			return {
				...state,
				movies: action.movies,
				filter: action.filter,
			};
		case ACTIONS.FILTER_MOVIES_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case ACTIONS.SORT_MOVIES_START:
			return {
				...state,
				loading: true,
			};
		case ACTIONS.SORT_MOVIES_SUCCESS:
			return {
				...state,
				movies: action.movies,
				sorting: action.sorting,
			};
		case ACTIONS.SORT_MOVIES_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default movies;
