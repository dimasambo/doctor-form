import styled from 'styled-components';
import {Field, Form} from "formik";

export const DarkForm = styled(Form)`
  background-color: #333;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 430px;
  margin: 0 auto;
  
  @media(max-width: 550px) {
    width: 300px;
  }
  
  .submitButton {
    width: 250px;
    margin-top: 15px;
  }
`;

export const DarkLabel = styled.label`
  color: #fff;
  display: block;
  margin-bottom: 2px;
  margin-top: 10px;
  font-size: 14px;
  margin-left: 3px;
`;

export const DarkInput = styled(Field)`
  background-color: #555;
  color: #fff;
  border: none;
  padding: 9px;
  width: 100%;
  border-radius: 4px;
  box-sizing: border-box;
  transition: .1s;
  
  ::placeholder {
    color: #ccc;
  }
  
  &:hover {
    background-color: #777;
  }
`;

export const DarkButton = styled.button`
  background-color: #777;
  color: #fff;
  padding: 5px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: .1s;

  &:hover {
    background-color: #888;
  }
`;

export const DarkActiveButton = styled.button`
  background-color: #777;
  color: #fff;
  padding: 3px 16px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;
  width: 100px;
  transition: .1s;

  &:hover {
    background-color: #444;
  }
`;

export const ErrorText = styled.div`
  color: #ff7f7f;
  font-size: 11px;
`;