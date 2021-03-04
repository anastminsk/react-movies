import styled from 'styled-components';

export const HeaderTop = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px 40px;
`;

export const HeaderAddBtn = styled.button`
	color: #f65261;
	border: none;
	background: #555;
	border-radius: 5px;
	padding: 15px 35px;
	font-size: 18px;
	cursor: pointer;
`;

export const HeaderSearchBlock = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 20px 100px;
`;

export const HeaderTitle = styled.p`
	color: #fff;
	font-size: 44px;
	padding-bottom: 20px;
`;

export const HeaderSearchLine = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const HeaderSearchInput = styled.input`
	border: none;
	border-radius: 5px;
	padding: 18px;
	margin-right: 10px;
	background: #232323;
	font-size: 18px;
	color: #fff;
	flex-grow: 1;
`;

export const HeaderSearchBtn = styled.button`
	background: #f65261;
	color: #fff;
	border: none;
	border-radius: 5px;
	padding: 15px 55px;
	font-size: 18px;
	cursor: pointer;
	margin-left: 5px;
`;
