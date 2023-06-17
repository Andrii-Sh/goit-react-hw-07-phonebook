import styled from '@emotion/styled';

export const ContactList = styled.ul``;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 0 0 20px 0;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: black;
  }
`;
