import styled from '@emotion/styled';

export const PhoneBookForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;
export const PhoneBookLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box;
  gap: 10px;
  font-size: 20px;
  font-weight: 700;
`;
export const PhoneBookInput = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 500;
  border: 1px solid #000;
  border-radius: 5px;
  outline: none;
  &:focus {
    border: 1px solid #000;
  }
`;
export const PhoneBookButton = styled.button`
  padding: 20px;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 500;
  border: 1px solid #000;
  border-radius: 5px;
  outline: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
