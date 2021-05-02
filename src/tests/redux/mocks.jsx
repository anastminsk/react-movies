export const mockInitialState = {
	movies: [],
	error: null,
	currentMovie: null,
	filter: 'All',
	sorting: 'release_date',
	search: null,
};

export const mockMovies = [
	{
		budget: 0,
		genres: ['Action', 'Comedy', 'Science Fiction'],
		id: 383498,
		overview:
			"Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
		poster_path:
			'https://image.tmdb.org/t/p/w500/qjiPP4FhTV3UAGa1Dbf2qEqTvu5.jpg',
		release_date: '2018-05-16',
		revenue: 0,
		runtime: null,
		tagline: 'Prepare for the Second Coming.',
		title: 'Deadpool 2',
		vote_average: 5.2,
		vote_count: 1,
	},
	{
		budget: 0,
		genres: ['Comedy', 'Drama'],
		id: 443009,
		overview:
			'A man becomes paralyzed after a car accident and discovers drawing as a therapy.',
		poster_path:
			'https://image.tmdb.org/t/p/w500/y6E5tgqdhvW3mr3dGo8NenWHRCg.jpg',
		release_date: '2018-04-04',
		revenue: 0,
		runtime: 113,
		tagline: '',
		title: 'Don’t Worry, He Won’t Get Far on Foot',
		vote_average: 6.1,
		vote_count: 1,
	},
	{
		budget: 0,
		genres: ['Comedy', 'Drama', 'Thriller'],
		id: 421044,
		overview:
			'When a drifter befriends a quirky mortician, an unlikely business partnership is formed. Paranoia soon develops, however, and both men are forced to come to terms with the fragility of friendship and loyalty.',
		poster_path:
			'https://image.tmdb.org/t/p/w500/5Knp0sBWb4hLTc49qaiDjZ4DYV8.jpg',
		release_date: '2018-03-30',
		revenue: 0,
		runtime: 108,
		tagline: 'Friendship before money',
		title: 'Best F(r)iends',
		vote_average: 3.3,
		vote_count: 9,
	},
];

export const mockCurrentMovie = mockMovies[0];
export const mockNewMovie = {
	budget: 0,
	genres: ['Comedy'],
	id: 437557,
	overview:
		'When three parents discover their daughters’ pact to lose their virginity at prom, they launch a covert one-night operation to stop the teens from sealing the deal.',
	poster_path:
		'https://image.tmdb.org/t/p/w500/9qKMYfiJTcUQbuBl82yxrmLSCX5.jpg',
	release_date: '2018-03-30',
	revenue: 0,
	runtime: 102,
	tagline: 'Teens out to have fun. Parents out to stop it.',
	title: 'Blockers',
	vote_average: 5.8,
	vote_count: 13,
};

export const mockEditedMovie = {
	budget: 0,
	genres: ['Comedy', 'Drama'],
	id: 443009,
	overview:
		'A man becomes paralyzed after a car accident and discovers drawing as a therapy.',
	poster_path:
		'https://image.tmdb.org/t/p/w500/y6E5tgqdhvW3mr3dGo8NenWHRCg.jpg',
	release_date: '2018-04-04',
	revenue: 0,
	runtime: 113,
	tagline: '',
	title: 'Don’t Worry, He Won’t Get Far on Foot',
	vote_average: 7.8,
	vote_count: 1,
};
