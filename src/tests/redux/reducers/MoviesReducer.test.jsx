import reducer from '../../../redux/reducers/movies';
import * as ACTIONS from '../../../redux/actions/actionTypes';
import {
	mockInitialState,
	mockMovies,
	mockCurrentMovie,
	mockNewMovie,
	mockEditedMovie
} from '../mocks';

describe('movies reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(mockInitialState);
	});

	it('should handle FETCH_MOVIES_START', () => {
		expect(
			reducer(mockInitialState, {
				type: ACTIONS.FETCH_MOVIES_START,
			})
		).toEqual({
			...mockInitialState,
		});
	});

	it('should handle FETCH_MOVIES_SUCCESS', () => {
		expect(
			reducer(mockInitialState, {
				type: ACTIONS.FETCH_MOVIES_SUCCESS,
				movies: mockMovies,
			})
		).toEqual({
			...mockInitialState,
			movies: mockMovies,
		});
	});

	it('should handle FETCH_MOVIES_ERROR', () => {
		expect(
			reducer(mockInitialState, {
				type: ACTIONS.FETCH_MOVIES_ERROR,
				error: 'some error',
			})
		).toEqual({
			...mockInitialState,
			error: 'some error',
		});
	});

	it('should handle FETCH_MOVIE_START', () => {
		expect(
			reducer(mockInitialState, {
				type: ACTIONS.FETCH_MOVIE_START,
			})
		).toEqual({
			...mockInitialState,
		});
	});

	it('should handle FETCH_MOVIE_SUCCESS', () => {
		expect(
			reducer(mockInitialState, {
				type: ACTIONS.FETCH_MOVIE_SUCCESS,
				currentMovie: mockCurrentMovie,
			})
		).toEqual({
			...mockInitialState,
			currentMovie: mockCurrentMovie,
		});
	});

	it('should handle FETCH_MOVIE_ERROR', () => {
		expect(
			reducer(mockInitialState, {
				type: ACTIONS.FETCH_MOVIE_ERROR,
				error: 'some error',
			})
		).toEqual({
			...mockInitialState,
			error: 'some error',
		});
	});

	it('should handle CREATE_MOVIE_START', () => {
		expect(
			reducer(mockInitialState, {
				type: ACTIONS.CREATE_MOVIE_START,
			})
		).toEqual({
			...mockInitialState,
		});
	});

	it('should handle CREATE_MOVIE_SUCCESS', () => {
		expect(
			reducer(mockInitialState, {
				type: ACTIONS.CREATE_MOVIE_SUCCESS,
				currentMovie: mockNewMovie,
			})
		).toEqual({
			...mockInitialState,
			movies: [...mockInitialState.movies, mockNewMovie],
		});
	});

	it('should handle CREATE_MOVIE_ERROR', () => {
		expect(
			reducer(mockInitialState, {
				type: ACTIONS.CREATE_MOVIE_ERROR,
				error: 'some error',
			})
		).toEqual({
			...mockInitialState,
			error: 'some error',
		});
	});

	it('should handle EDIT_MOVIE_START', () => {
		expect(
			reducer(mockInitialState, {
				type: ACTIONS.EDIT_MOVIE_START,
			})
		).toEqual({
			...mockInitialState,
		});
	});

	it('should handle EDIT_MOVIE_SUCCESS', () => {
		expect(
			reducer(
				{
					...mockInitialState,
					movies: mockMovies,
				},
				{
					type: ACTIONS.EDIT_MOVIE_SUCCESS,
					movie: mockEditedMovie,
				}
			)
		).toEqual({
			...mockInitialState,
			movies: mockMovies.map((el) =>
				el.id === mockEditedMovie.id ? mockEditedMovie : el
			),
		});
	});

	it('should handle EDIT_MOVIE_ERROR', () => {
		expect(
			reducer(mockInitialState, {
				type: ACTIONS.EDIT_MOVIE_ERROR,
				error: 'some error',
			})
		).toEqual({
			...mockInitialState,
			error: 'some error',
		});
	});

	it('should handle DELETE_MOVIE_START', () => {
		expect(
			reducer(mockInitialState, {
				type: ACTIONS.DELETE_MOVIE_START,
			})
		).toEqual({
			...mockInitialState,
		});
	});

	it('should handle DELETE_MOVIE_SUCCESS', () => {
		expect(
			reducer(
				{
					...mockInitialState,
					movies: mockMovies,
				},
				{
					type: ACTIONS.DELETE_MOVIE_SUCCESS,
					id: 421044,
				}
			)
		).toEqual({
			...mockInitialState,
			movies: mockMovies.filter((el) => el.id !== 421044),
		});
	});

	it('should handle DELETE_MOVIE_ERROR', () => {
		expect(
			reducer(mockInitialState, {
				type: ACTIONS.DELETE_MOVIE_ERROR,
				error: 'some error',
			})
		).toEqual({
			...mockInitialState,
			error: 'some error',
		});
	});

	it('should handle FILTER_MOVIES_START', () => {
		expect(
			reducer(mockInitialState, {
				type: ACTIONS.FILTER_MOVIES_START,
			})
		).toEqual({
			...mockInitialState,
		});
	});

	it('should handle FILTER_MOVIES_SUCCESS', () => {
		expect(
			reducer({
				...mockInitialState,
				movies: mockMovies,
			},
			{
				type: ACTIONS.FILTER_MOVIES_SUCCESS,
				movies: mockMovies,
				filter: 'Comedy',
			})
		).toEqual({
			...mockInitialState,
			filter: 'Comedy',
			movies: mockMovies.filter((el) => el.genres.includes('Comedy')),
		});
	});

	it('should handle FILTER_MOVIES_ERROR', () => {
		expect(
			reducer(mockInitialState, {
				type: ACTIONS.FILTER_MOVIES_ERROR,
				error: 'some error',
			})
		).toEqual({
			...mockInitialState,
			error: 'some error',
		});
	});

	it('should handle SORT_MOVIES_START', () => {
		expect(
			reducer(mockInitialState, {
				type: ACTIONS.SORT_MOVIES_START,
			})
		).toEqual({
			...mockInitialState,
		});
	});

	it('should handle SORT_MOVIES_SUCCESS', () => {
		expect(
			reducer({
				...mockInitialState,
				movies: mockMovies,
			},
			{
				type: ACTIONS.SORT_MOVIES_SUCCESS,
				movies: mockMovies,
				sorting: 'rating',
			})
		).toEqual({
			...mockInitialState,
			sorting: 'rating',
			movies: mockMovies.sort((first, second) => first.vote_average - second.vote_average),
		});
	});

	it('should handle SORT_MOVIES_ERROR', () => {
		expect(
			reducer(mockInitialState, {
				type: ACTIONS.SORT_MOVIES_ERROR,
				error: 'some error',
			})
		).toEqual({
			...mockInitialState,
			error: 'some error',
		});
	});

	it('should handle SEARCH_MOVIE_START', () => {
		expect(
			reducer(mockInitialState, {
				type: ACTIONS.SEARCH_MOVIE_START,
			})
		).toEqual({
			...mockInitialState,
		});
	});

	it('should handle SEARCH_MOVIE_SUCCESS', () => {
		expect(
			reducer({
				...mockInitialState,
				movies: mockMovies,
			},
			{
				type: ACTIONS.SEARCH_MOVIE_SUCCESS,
				movies: mockMovies,
				search: 'car',
			})
		).toEqual({
			...mockInitialState,
			search: 'car',
			movies: mockMovies.filter((el) => el.title.matchAll(/car/g)),
		});
	});

	it('should handle SEARCH_MOVIE_ERROR', () => {
		expect(
			reducer(mockInitialState, {
				type: ACTIONS.SEARCH_MOVIE_ERROR,
				error: 'some error',
			})
		).toEqual({
			...mockInitialState,
			error: 'some error',
		});
	});
});
