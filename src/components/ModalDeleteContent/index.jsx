import React, { Fragment } from 'react';
import {
	ModalDeleteDescription,
	StyledButton,
	ButtonWrapper,
} from './styled.modal-delete-content';

const ModalDeleteContent = ({ onDeleteMovie }) => {
	return (
		<Fragment>
			<ModalDeleteDescription>
				Are you sure you want to delete this movie?
			</ModalDeleteDescription>
			<ButtonWrapper>
				<StyledButton variant="outlined" onClick={onDeleteMovie}>
					Confirm
				</StyledButton>
			</ButtonWrapper>
		</Fragment>
	);
};

export default ModalDeleteContent;
