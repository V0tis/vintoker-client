import React from 'react';
import { LayoutFlex, LayoutFlexJustify } from './Flex';
import { Typography } from './Typography';

const Header: React.FunctionComponent = () => {
  const Typo = ({ text, styles }: { text: string, styles?: Record<string, string | number> }) => (
    <Typography>
      {text}
    </Typography>
  )

  return (
    <LayoutFlexJustify justifyContent="space-between">
      <LayoutFlexJustify width="150px" justifyContent="space-between">
        <Typo text="VINTOKER"/>
        <Typo text="SHOP"/>
      </LayoutFlexJustify>
      <LayoutFlexJustify width="150px" justifyContent="space-between">
        <Typo text="SEARCH"/>
        <Typo text="CART"/>
      </LayoutFlexJustify>
    </LayoutFlexJustify>
  );
};

export default Header;