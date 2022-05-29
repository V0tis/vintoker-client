import styled from 'styled-components';

export const Typography = styled.p`
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color || '#000000'};
  padding-right: ${({ paddingRight }) => paddingRight || 0}px;
  font-size: ${({ size }) => `${size || 16}px`};
  font-family: ${({ font }) => font || 'NotoSansCJKKR-Regular'}, 'sans-serif';
  opacity: ${({ opacity }) => opacity || 1};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || '0.8'}px;
  line-height: ${({ lineHeight }) => `${typeof lineHeight !== 'undefined' ? `${lineHeight}px` : 'normal'}`};
  text-decoration: ${({ decoration }) => decoration || 'none'};
  word-break: break-all;
  white-space: ${({ whiteSpace }) => whiteSpace};
  opacity: ${({ opacity }) => opacity};
  text-align: ${({ textAlign }) => textAlign};
`;