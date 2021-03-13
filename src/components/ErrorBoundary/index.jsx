import React from 'react';
import { movies } from '../MoviesList/model';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError || !movies || !movies.length) {
			return <h2>No data. Something went wrong.</h2>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
