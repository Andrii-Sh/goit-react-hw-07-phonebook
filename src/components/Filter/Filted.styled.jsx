import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  font-size: 20px;
  font-weight: 600;
`;

export const Input = styled.input`
  margin-top: 8px;

  width: 180px;
  border: 1px solid #a78484;
  border-radius: 2px;

  font-size: 16px;

  &:focus {
    border: 3px solid #1a91b999;
    outline: none;
  }
`;
