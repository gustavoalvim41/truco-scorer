import styled from 'styled-components/native';

export interface CounterProps {
  children: number;
  fontFamily?: string;
  fontSize?: string;
  lineHeight?: string;
  textAlign?: string;
  fontColor?: string;
}

export const CounterType = styled.Text<CounterProps>`
  font-family: ${(props) => props.fontFamily || 'Montserrat-Bold'};
  font-size: ${(props) => props.fontSize || '32px'};
  line-height: ${(props) => props.lineHeight || '36px'};
  text-align: ${(props) => props.textAlign || 'center'};
  color: ${(props) => props.fontColor || '#f5f5f5'};
`;