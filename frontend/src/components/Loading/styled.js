import styled from 'styled-components';

export const Container = styled.div`
  font-size: 2em;
  color: #fff;
  display:flex;
  justify-content: center;
  align-items:center;
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:1;
  
  div{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    z-index:1;
  }
  
  span{
    z-index:2;
  }

`;

