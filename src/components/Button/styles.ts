import styled from 'styled-components/native';
import { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  onPress?: () => void;
  widthButton?: string;
  heightButton?: string;
  marginButton?: string;
  borderRadius?: string;
  opacityButton?: number;
  fontFamily?: string;
  fontSize?: string;
  lineHeight?: string;
  textAlign?: string;
  fontColor?: string;
}

export const ButtonType = styled.TouchableOpacity<ButtonProps>`
  width: ${(props) => props.widthButton || '300px'};
  height: ${(props) => props.heightButton || '70px'};
  margin: ${(props) => props.marginButton || '0px'};
  
  align-items: center;
  justify-content: center;

  opacity: ${(props) => props.opacityButton || '1'};

  border: 3px solid #F5F5F5;
  border-radius: ${(props) => props.borderRadius || '0px'};
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-family: ${(props) => props.fontFamily || 'Montserrat-Black'};
  font-size: ${(props) => props.fontSize || '36px'};
  line-height: ${(props) => props.lineHeight || '46px'};

  text-align: ${(props) => props.textAlign || 'center'};
  color: ${(props) => props.fontColor || '#F5F5F5'};
`;