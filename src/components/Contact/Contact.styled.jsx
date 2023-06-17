import styled from '@emotion/styled';

export const ContactInfo = styled.p`
  margin: 0;

  font-size: 20px;
  font-weight: 600;
`;

export const DeleteButton = styled.button`
  width: 60px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #a78484;

  &:hover,
  &:focus {
    box-shadow: 1px 1px 1px gray;
    scale: 1.03;
  }
`;
