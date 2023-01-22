import React from 'react';
import { CounterType, CounterProps } from './styles';

const Counter = (
  {
    children,
    fontFamily,
    fontSize,
    lineHeight,
    textAlign,
    fontColor
  }: CounterProps) => {
  return (
    <CounterType
      fontFamily={fontFamily}
      fontSize={fontSize}
      lineHeight={lineHeight}
      textAlign={textAlign}
      fontColor={fontColor}
    >
      {children}
    </CounterType>
  )
}

export default Counter;