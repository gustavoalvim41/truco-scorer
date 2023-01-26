import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;

  background-color: #000;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export interface RowProps {
  RowWidth?: string;
  RowMargin?: string;
  RowPadding?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
}

export const Row = styled.View<RowProps>`
  width: ${(props) => props.RowWidth || '100%'};
  margin: ${(props) => props.RowMargin || '0px'};
  padding: ${(props) => props.RowPadding || '0 20px'};

  flex-direction: ${(props) => props.flexDirection || 'column'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'center'};
`;