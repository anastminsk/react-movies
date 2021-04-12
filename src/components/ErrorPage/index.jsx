import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { NotFound, GoBackButton } from './styled.error-page';

const ErrorPageComponent = ({ className }) => {
	const history = useHistory();
	return (
		<section className={className}>
			<div>Page Not Found</div>
			<NotFound>404</NotFound>
			<GoBackButton variant="outlined" size="large"
				onClick={() => {
					history.push('/');
				}}
			>
				Go back to home
			</GoBackButton>
		</section>
	);
};

const ErrorPage = styled(ErrorPageComponent)`
	min-height: calc(100vh - 70px);
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	color: #fff;
	font-size: 36px;
`;

export default ErrorPage;
