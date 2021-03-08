import React, { Fragment } from 'react';
import {
	ModalDeleteDescription,
	StyledButton,
	ButtonWrapper,
} from './styled.modal-delete-content';

const ModalDeleteContent = ({ closeModal }) => {
	return (
		<Fragment>
			<ModalDeleteDescription>
				Are you sure you want to delete this movie?
			</ModalDeleteDescription>
			<ButtonWrapper>
				<StyledButton variant="outlined" onClick={closeModal}>
					Confirm
				</StyledButton>
			</ButtonWrapper>
		</Fragment>
	);
};

export default ModalDeleteContent;
