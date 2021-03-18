import styled from 'styled-components';

export const MovieDetailsImage = styled.img`
	height: 300px;
	width: 200px;
	margin-right: 40px;
`;

export const MovieDetailsTitleBlock = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const MovieDetailsTitle = styled.p`
	font-size: 36px;
	margin: 10px 20px 10px 0;
`;

export const MovieDetailsRating = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px solid white;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	font-size: 24px;
	color: green;
`;

export const MovieDetailsGenre = styled.div`
	margin-bottom: 20px;
`;

export const MovieDetailsReleaseDate = styled.span`
	color: #f65261;
	font-size: 24px;
	margin-right: 30px;
`;

export const MovieDetailsDuration = styled.span`
	color: #f65261;
	font-size: 24px;
`;

export const MovieDetailsOverview = styled.div`
	margin-top: 20px;
`;
