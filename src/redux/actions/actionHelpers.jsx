export const MOVIES_URL = 'http://localhost:4000/movies';

export const getSearchParams = (getState) => {
	return getState().movies.search ? `search=${getState().movies.search}&searchBy=title` : null;
}

export const getFilterParams = (getState) => {
	return getState().movies.filter === 'All' ? null : `filter=${getState().movies.filter}`;
}

export const getSortParams = (getState) => {
	return `sortOrder=desc&sortBy=${getState().movies.sorting}`;
}

const getParamsString = (searchParams, filterParams, sortParams) => {
	return [searchParams, filterParams, sortParams].filter((el) => el !== null).join('&');
}

export const getMoviesUrlWithParams = (searchParams, filterParams, sortParams) => {
	return `${MOVIES_URL}?${getParamsString(searchParams, filterParams, sortParams)}`;
}
