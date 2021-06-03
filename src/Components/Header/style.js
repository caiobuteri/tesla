import styled from 'styled-components';

export const Header2 = styled.header`
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

export const LeftSide = styled.div`

`

export const Middle = styled.div`
  display: flex;
`

export const RightSide = styled.div`

`
export const Logo = styled.img`
  width: 120px;
`

export const List = styled.ul`
  display: flex;
  padding:0px;
  margin:0px;
  list-style: none;
`

export const ListItem = styled.li`
  margin: 0 10px;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
`

export const Menu = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 18px;
  height: 16px;
  margin: 0 5px;
  cursor: pointer;
`

export const MenuIcon = styled.div`
  height: 2px;
  background-color: black;
`
