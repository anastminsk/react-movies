import { render } from '@testing-library/react';
import React from 'react';

import Logo from '../../components/Logo';

describe('Logo', () => {
	test('renders Logo snapshot', () => {
		const { asFragment } = render(<Logo />);
		expect(asFragment()).toMatchSnapshot();
	});
});
