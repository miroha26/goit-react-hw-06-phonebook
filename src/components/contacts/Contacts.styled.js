import styled from '@emotion/styled';
export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
  border: 1px solid #000;
  border-radius: 5px;
  width: 300px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 50px;
`;
export const ContactsList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: upper-roman;
`;

export const ContactsItem = styled.li`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  text-decoration: underline;
  margin-bottom: 10px;
  font-size: 16px;
  font-weigth: 500;
`;
export const Button = styled.button`
  padding: 5px;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 16px;
  font-weigth: 500;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
