import React from 'react';
import ModalAddEditContent from '../../components/ModalAddEditContent';
import { Provider } from 'react-redux';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const closeModal = jest.fn(() => {});
const onModalSubmit = jest.fn(() => {});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ movies: [] });

const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe('ModalAddEditContent', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should display all fields', async () => {
		render(
			<ModalAddEditContent
				closeModal={closeModal}
				onModalSubmit={onModalSubmit}
			/>,
			{ wrapper: Wrapper }
		);
		expect(screen.getByLabelText('Movie ID')).toBeInTheDocument();
		expect(screen.getByLabelText('Title')).toBeInTheDocument();
		expect(screen.getByLabelText('Release date')).toBeInTheDocument();
		expect(screen.getByLabelText('Poster path')).toBeInTheDocument();
		expect(screen.getByLabelText('Genres')).toBeInTheDocument();
		expect(screen.getByLabelText('Overview')).toBeInTheDocument();
		expect(screen.getByLabelText('Runtime')).toBeInTheDocument();
		expect(screen.getByLabelText('Tagline')).toBeInTheDocument();
		expect(screen.getByLabelText('Vote average')).toBeInTheDocument();
	});

	it('should not submit form by click on submit if fields are empty', async () => {
		render(
			<ModalAddEditContent
				closeModal={closeModal}
				onModalSubmit={onModalSubmit}
			/>,
			{ wrapper: Wrapper }
		);

		await waitFor(() => {
			userEvent.click(screen.getByText('Submit'));
		});

		expect(closeModal).not.toHaveBeenCalled();
		expect(onModalSubmit).not.toHaveBeenCalled();
	});
});
