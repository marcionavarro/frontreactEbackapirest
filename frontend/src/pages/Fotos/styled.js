import styled from 'styled-components';
import { primaryColor } from '../../config/colors';


export const ContainerInputFile = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
 
`;

export const Form = styled.form`
  label{
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eee;
    border: 5px dashed ${primaryColor};
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;


    img{
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

  }
  input {
    display: none;
  }
`;
