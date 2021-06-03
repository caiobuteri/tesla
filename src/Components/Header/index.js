import React from 'react';
import { Header2, LeftSide, List, ListItem, Logo, Menu, MenuIcon, Middle, RightSide } from './style';
import LogoPng from '../../Assets/images/logo.png';

import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <Header2>
      <LeftSide><Logo src={LogoPng} alt="Devsla"/></LeftSide>

      <Middle>
        <List>
          <ListItem>MODEL S</ListItem>
          <ListItem>MODEL 3</ListItem>
          <ListItem>MODEL X</ListItem>
          <ListItem>MODEL Y</ListItem>
          <ListItem>SOLAR ROOF</ListItem>
          <ListItem>SOLAR PANELS</ListItem>
        </List>
      </Middle>

      <RightSide>
        <List>
          <ListItem>Shop</ListItem>
          <ListItem>Tesla Account</ListItem>
          <Menu>
            <MenuIcon/>
            <MenuIcon/>
            <MenuIcon/>
          </Menu>
        </List>
      </RightSide>
    </Header2>
  )
}