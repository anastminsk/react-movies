import expect from 'expect';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as ACTIONS from '../../../redux/actions/actionTypes';
import {
	fetchMovies,
	fetchMoviesStart,
	fetchMoviesSuccess,
	fetchMoviesError,
	fetchMovieById,
	fetchMovieStart,
	fetchMovieSuccess,
	fetchMovieError,
} from '../../../redux/actions';
import { mockCurrentMovie, mockMovies } from '../mocks';
import { MOVIES_URL } from '../../../redux/actions/actionHelpers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
	afterEach(() => {
		fetchMock.restore();
	});

	it('creates FETCH_MOVIES_SUCCESS when fetching movies has been done', () => {
		fetchMock.getOnce(
			MOVIES_URL,
			{
				headers: { 'Content-type': 'application/json' },
				body: {
					data: mockMovies,
				},
			}
		);

		const expectedActions = [
			{
				type: ACTIONS.FETCH_MOVIES_START,
			},
			{
				type: ACTIONS.FETCH_MOVIES_SUCCESS,
				movies: mockMovies,
			},
		];

		const store = mockStore({ movies: [] });

		return store.dispatch(fetchMovies()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('fetchMoviesStart should start fetch movies', () => {
		const expectedAction = {
			type: ACTIONS.FETCH_MOVIES_START,
		};
		expect(fetchMoviesStart()).toEqual(expectedAction);
	});

	it('fetchMoviesSuccess should fetch movies successfully', () => {
		const expectedAction = {
			type: ACTIONS.FETCH_MOVIES_SUCCESS,
			movies: mockMovies,
		};
		expect(fetchMoviesSuccess(mockMovies)).toEqual(expectedAction);
	});

	it('fetchMoviesError should fetch movies with error', () => {
		const expectedAction = {
			type: ACTIONS.FETCH_MOVIES_ERROR,
			error: 'some error',
		};
		expect(fetchMoviesError('some error')).toEqual(expectedAction);
	});

	it('creates FETCH_MOVIE_SUCCESS when fetching movie by id has been done', () => {
		fetchMock.getOnce(
			`${MOVIES_URL}/${mockCurrentMovie.id}`,
			{
				headers: { 'Content-type': 'application/json' },
				body: mockCurrentMovie,
			}
		);

		const expectedActions = [
			{
				type: ACTIONS.FETCH_MOVIE_START,
			},
			{
				type: ACTIONS.FETCH_MOVIE_SUCCESS,
				currentMovie: mockCurrentMovie,
			},
		];

		const store = mockStore({ currentMovie: null });

		return store.dispatch(fetchMovieById(mockCurrentMovie.id)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('fetchMovieStart should start fetch movie by id', () => {
		const expectedAction = {
			type: ACTIONS.FETCH_MOVIE_START,
		};
		expect(fetchMovieStart()).toEqual(expectedAction);
	});

	it('fetchMovieSuccess should fetch movie by id successfully', () => {
		const expectedAction = {
			type: ACTIONS.FETCH_MOVIE_SUCCESS,
			currentMovie: mockCurrentMovie,
		};
		expect(fetchMovieSuccess(mockCurrentMovie)).toEqual(expectedAction);
	});

	it('fetchMovieError should fetch movie by id with error', () => {
		const expectedAction = {
			type: ACTIONS.FETCH_MOVIE_ERROR,
			error: 'some error',
		};
		expect(fetchMovieError('some error')).toEqual(expectedAction);
	});
});
