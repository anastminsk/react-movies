import pulpFictionImage from '../../assets/images/pulp-fiction.jpg';
import bohemianRhapsodyImage from '../../assets/images/bohemian-rhapsody.jpg';
import killBillImage from '../../assets/images/kill-bill.jpg';
import avengersImage from '../../assets/images/avengers.jpg';
import inceptionImage from '../../assets/images/inception.jpg';
import reservoirDogsImage from '../../assets/images/reservoir-dogs.jpg';

export const movies = [
	{
		id: '001',
		title: 'Pulp Fiction',
		genre: 'Action',
		runTime: 154,
		releaseDate: '1994-10-25',
		image: `${pulpFictionImage}`,
	},
	{
		id: '002',
		title: 'Bohemian Rhapsody',
		genre: 'Drama',
		runTime: 134,
		releaseDate: '2018-05-11',
		image: `${bohemianRhapsodyImage}`,
	},
	{
		id: '003',
		title: 'Kill Bill: Vol 2',
		genre: 'Drama',
		runTime: 247,
		releaseDate: '2003-06-14',
		image: `${killBillImage}`,
	},
	{
		id: '004',
		title: 'Avengers: War of Infinity',
		genre: 'Action',
		runTime: 149,
		releaseDate: '2018-04-23',
		image: `${avengersImage}`,
	},
	{
		id: '005',
		title: 'Inception',
		genre: 'Action',
		runTime: 148,
		releaseDate: '2010-07-08',
		image: `${inceptionImage}`,
	},
	{
		id: '006',
		title: 'Reservoir dogs',
		genre: 'Crime',
		runTime: 100,
		releaseDate: '1992-01-21',
		image: `${reservoirDogsImage}`,
	},
];
