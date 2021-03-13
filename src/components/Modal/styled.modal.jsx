import styled from 'styled-components';

export const ModalTitle = styled.div`
	color: #fff;
	font-size: 30px;
	margin-bottom: 15px;
`;

export const reactModalStyle = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		transform: 'translate(-50%, -50%)',
		padding: '40px',
		borderRadius: '7px',
		border: 'none',
		background: '#232323',
		minWidth: '400px',
	},
};

export const closeIconStyle = {
	color: '#fff',
	position: 'absolute',
	top: '10px',
	right: '10px',
	cursor: 'pointer',
};
