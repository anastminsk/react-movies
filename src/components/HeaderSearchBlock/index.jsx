import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	HeaderTitle,
	HeaderSearchLine,
	HeaderSearchInput,
	HeaderSearchButton,
} from './styled.header-search-block';

const HeaderSearchBlockComponent = ({ className }) => (
	<section className={className}>
		<HeaderTitle>FIND YOUR MOVIE</HeaderTitle>
		<HeaderSearchLine>
			<HeaderSearchInput
				type="text"
				placeholder="What do you want to watch?"
			/>
			<HeaderSearchButton variant="contained">Search</HeaderSearchButton>
		</HeaderSearchLine>
	</section>
);

HeaderSearchInput.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
};

const HeaderSearchBlock = styled(HeaderSearchBlockComponent)`
	display: flex;
	flex-direction: column;
	padding: 20px 100px;
`;

export default HeaderSearchBlock;
