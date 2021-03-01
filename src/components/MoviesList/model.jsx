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
		genre: 'Action & Adventure',
		date: 2004,
		image: `${pulpFictionImage}`,
	},
	{
		id: '002',
		title: 'Bohemian Rhapsody',
		genre: 'Drama, Biography, Music',
		date: 2003,
		image: `${bohemianRhapsodyImage}`,
	},
	{
		id: '003',
		title: 'Kill Bill: Vol 2',
		genre: 'Oscar winning movie',
		date: 1994,
		image: `${killBillImage}`,
	},
	{
		id: '004',
		title: 'Avengers: War of Infinity',
		genre: 'Action & Adventure',
		date: 2004,
		image: `${avengersImage}`,
	},
	{
		id: '005',
		title: 'Inception',
		genre: 'Action & Adventure',
		date: 2003,
		image: `${inceptionImage}`,
	},
	{
		id: '006',
		title: 'Reservoir dogs',
		genre: 'Oscar winning movie',
		date: 1994,
		image: `${reservoirDogsImage}`,
	},
];
