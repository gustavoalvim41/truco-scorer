import React from 'react';
import { ParagraphType, ParagraphProps } from './styles';

const Paragraph = (
  {
    children,
    fontFamily,
    fontSize,
    lineHeight,
    textAlign,
    fontColor
  }: ParagraphProps) => {
  return (
    <ParagraphType
      fontFamily={fontFamily}
      fontSize={fontSize}
      lineHeight={lineHeight}
      textAlign={textAlign}
      fontColor={fontColor}
    >
      {children}
    </ParagraphType>
  )
}

export default Paragraph;