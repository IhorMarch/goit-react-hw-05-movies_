import styled from 'styled-components';
import {NavLink } from 'react-router-dom';

export const Button = styled.button`
  margin:auto;
   padding: 8px 16px;
  border-radius: 6px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  
  &:hover,
  &:focus {
    color: black;
    background-color: rgba(255, 255, 126, 1);
  }
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 120px;
  max-width:180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;


export const Wrapper = styled.div`
display:flex;
 margin: 24px;
  gap: 24px;
`;

export const Title = styled.p`
font-weight: 800;
 font-size: 24px;
  margin-bottom:25px;
`;



export const ItemImg = styled.img`
width: 100%;
  object-fit: cover;

  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  align-self: flex-start;

`;


export const ListItem = styled.li`
 font-weight: 700;
 font-size: 20px;
 margin-bottom:15px;
 
`;

export const ListInfo = styled.p`
 font-weight: 500;
 font-size: 16px;
  margin-top:10px;
 
`;
export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const List = styled.ul`
  display:flex;
 margin: 24px;
  gap: 24px;
`;

