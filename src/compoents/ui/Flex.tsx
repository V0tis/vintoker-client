import styled from 'styled-components';

export const LayoutFlexJustify = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
  align-items: center;
  width: ${({ width }) => width || '100%'};
`;

export const LayoutFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const LayoutFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
`;

export const LayoutFlexFullSizeCenterAligned = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const LayoutFlexCenterAligned = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width}px;
`;