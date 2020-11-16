import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
position: absolute;
left: 2.5%;
right: 2.5%;
display: flex;
flex-wrap: wrap;
padding-bottom: 20px;
`

export const Link = styled(NavLink)`
padding: 5px 8px;
color: #FFF;
font-size: 16px;
border: 1px solid #000;
text-decoration: none;
border: none;
background: rgb(0, 115, 119);
&:hover {
    cursor: pointer;
    background: #f5f5f5;
    color: rgb(0, 115, 119);
    transition: .3s
}
&.active {
    background: #f5f5f5;
    color: rgb(0, 115, 119);
}
`