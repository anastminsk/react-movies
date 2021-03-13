import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { ModalTitle, reactModalStyle, closeIconStyle } from './styled.modal';

ReactModal.setAppElement('#root');

const ModalComponent = ({ title, children, showModal, closeModal, className }) => {
	return (
		<section className={className}>
			<ReactModal
				isOpen={showModal}
				onRequestClose={closeModal}
				style={reactModalStyle}
				overlayClassName="ReactModal__Overlay"
			>
				<ModalTitle>{title}</ModalTitle>
				<CloseIcon
					style={closeIconStyle}
					fontSize="large"
					onClick={closeModal}
				/>
				{children}
			</ReactModal>
		</section>
	);
};

export const Modal = styled(ModalComponent)`
	display: ${({ showModal }) => (showModal ? 'block' : 'none')};
	background: rgb(53, 53, 53, 0.7);
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
`;

export default Modal;
