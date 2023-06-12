import styled from 'styled-components';
import { primaryColor } from '../../config/colors';


export const HeaderForm = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: 1.5rem;
  display:flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 0.75rem;
  // flex-direction: column;

  input {
    flex:1;   
    height: 3rem;
    margin-bottom: 1.1rem;
    border: 1px solid #ddd;
    border-radius: 0.35rem;
    padding: 0 0.75rem;
  }

  button{
    max-width: 250px;
    width: 100%;
    box-shadow:inset 0px 1px 0px 0px #f5978e;
    background:linear-gradient(to bottom, #C3073F 5%, #C3073F 100%);
    background-color:#C3073F;
    border-radius:6px;
    border:1px solid #C3073F;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:15px;
    font-weight:bold;
    padding:1rem 24px;
    text-decoration:none;
    text-shadow:0px 1px 0px #C3073F;

    &:hover{
      background:linear-gradient(to bottom, #C3073F 5%, #C3073F 100%);
	    background-color:#C3073F;
    }
  }
`;

export const ProfilePicture = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;

  img{
    width: 100px;
    height: 100px;
    border-radius: 200px 200px 200px 0px;
    object-fit: cover;
  }

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 20px;
    left: 0px;
    color: #fff;
    background: ${primaryColor};
    width: 36px;
    height: 36px;
    border-radius: 200px 200px 200px 0px;
    box-shadow: 1 1 1 0.5;

    &:hover{
      background: #fff
      color:: ${primaryColor};
    }
  }
`;
