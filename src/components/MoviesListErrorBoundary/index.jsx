import React, { Fragment } from 'react';
import { movies } from '../MoviesList/model';

const MoviesListErrorBoundary = (props) => {
	const ErrorText = () => (
		<h2>No data. Something went wrong.</h2>
	);
	const isEverythingOK = movies.length;

	return (
		<Fragment>
			{isEverythingOK ? props.children : <ErrorText />}
		</Fragment>
	);
}

export default MoviesListErrorBoundary;
