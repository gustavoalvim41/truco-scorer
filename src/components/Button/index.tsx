import React from 'react';
import { ButtonType, ButtonText, ButtonProps } from './styles';

const Button = (
  {
    children,
    disabled,
    onPress,
    widthButton,
    heightButton,
    marginButton,
    borderRadius,
    fontFamily,
    fontSize,
    lineHeight,
    textAlign,
    fontColor
  }: ButtonProps) => {
  return (
    <ButtonType
      disabled={disabled}
      onPress={onPress}
      widthButton={widthButton}
      heightButton={heightButton}
      marginButton={marginButton}
      borderRadius={borderRadius}
    >
      <ButtonText
        children={children}
        fontFamily={fontFamily}
        fontSize={fontSize}
        lineHeight={lineHeight}
        textAlign={textAlign}
        fontColor={fontColor}
      />
    </ButtonType>
  )
}

export default Button;