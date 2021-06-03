import React from 'react';

import { Footer2, ButtonsArea, ArrowArea, ButtonLight, ButtonDark, Arrow } from './style';

import ArrowImage from '../../Assets/images/down.png'

export default function Footer() {
  return (
    <Footer2>
      <ButtonsArea>
        <ButtonLight>Custom Order</ButtonLight>
        <ButtonDark>Existing Inventory</ButtonDark>
      </ButtonsArea>
      <ArrowArea><Arrow src={ArrowImage}/></ArrowArea>
    </Footer2>    
  )
}