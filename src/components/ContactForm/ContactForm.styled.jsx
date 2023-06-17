import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const ContactInputForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 400px;
  padding: 15px;

  border: 2px solid black;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 20px;
  font-weight: 600;
`;

export const Input = styled(Field)`
  width: 180px;
  border: 1px solid #a78484;
  border-radius: 2px;

  font-size: 16px;

  &:focus {
    border: 3px solid #1a91b999;
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  width: 100px;
  margin-top: 15px;
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
