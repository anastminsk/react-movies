import * as ACTIONS from '../actions/actionTypes';

const initialState = {
	movies: [],
	error: null,
	currentMovie: null,
	filter: 'All',
	sorting: 'release_date',
	search: null,
};

const movies = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.FETCH_MOVIES_START:
			return state;
		case ACTIONS.FETCH_MOVIES_SUCCESS:
			return {
				...state,
				movies: action.movies,
			};
		case ACTIONS.FETCH_MOVIES_ERROR:
			return {
				...state,
				error: action.error,
			};
		case ACTIONS.FETCH_MOVIE_START:
			return state;
		case ACTIONS.FETCH_MOVIE_SUCCESS:
			return {
				...state,
				currentMovie: action.currentMovie,
			};
		case ACTIONS.FETCH_MOVIE_ERROR:
			return {
				...state,
				error: action.error,
			};
		case ACTIONS.CREATE_MOVIE_START:
			return state;
		case ACTIONS.CREATE_MOVIE_SUCCESS:
			return {
				...state,
				movies: [...state.movies, action.currentMovie],
			};
		case ACTIONS.CREATE_MOVIE_ERROR:
			return {
				...state,
				error: action.error,
			};
		case ACTIONS.EDIT_MOVIE_START:
			return state;
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
				error: action.error,
			};
		case ACTIONS.DELETE_MOVIE_START:
			return state;
		case ACTIONS.DELETE_MOVIE_SUCCESS:
			return {
				...state,
				movies: [...state.movies.filter((el) => el.id !== action.id)],
			};
		case ACTIONS.DELETE_MOVIE_ERROR:
			return {
				...state,
				error: action.error,
			};
		case ACTIONS.FILTER_MOVIES_START:
			return state;
		case ACTIONS.FILTER_MOVIES_SUCCESS:
			return {
				...state,
				movies: action.movies,
				filter: action.filter,
			};
		case ACTIONS.FILTER_MOVIES_ERROR:
			return {
				...state,
				error: action.error,
			};
		case ACTIONS.SORT_MOVIES_START:
			return state;
		case ACTIONS.SORT_MOVIES_SUCCESS:
			return {
				...state,
				movies: action.movies,
				sorting: action.sorting,
			};
		case ACTIONS.SORT_MOVIES_ERROR:
			return {
				...state,
				error: action.error,
			};
		case ACTIONS.SEARCH_MOVIE_START:
			return state;
		case ACTIONS.SEARCH_MOVIE_SUCCESS:
			return {
				...state,
				movies: action.movies,
				search: action.search,
			};
		case ACTIONS.SEARCH_MOVIE_ERROR:
			return {
				...state,
				error: action.error,
			};
		default:
			return state;
	}
};

export default movies;
