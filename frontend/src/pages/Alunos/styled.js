import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AlunoContainer = styled.div`
  margin-top: 30px;
  div{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid #eee;
  }

  span{
    flex-grow:1;
    flex-basis: auto;
    margin-left: 15px;
  }

  a{
    margin-left: 10px;
  }
`;

export const ProfilePicture = styled.div`
  img{
    width: 36px;
    height:36px;
    border-radius: 50%;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;

`

export const NovoAluno = styled(Link)`
 box-shadow: 0px 10px 14px -7px #3e7327;
	background:linear-gradient(to bottom, #77b55a 5%, #72b352 100%);
	background-color:#77b55a;
	border-radius:4px;
	border:1px solid #4b8f29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	font-weight:bold;
	padding:6px 12px;
	text-decoration:none;
	text-shadow:0px 1px 0px #5b8a3c;

  &:hover{
    background:linear-gradient(to bottom, #72b352 5%, #77b55a 100%);
	background-color:#72b352;
  }

  &:active{
    position:relative;
	  top:1px;
  }
`;
