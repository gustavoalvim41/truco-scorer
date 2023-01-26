import styled from 'styled-components/native';
import { ReactNode } from "react";

export interface RowProps {
    children?: ReactNode;
    RowWidth?: string;
    RowMargin?: string;
    RowPadding?: string;
    flexDirection?: string;
    alignItems?: string;
    justifyContent?: string;
  }
  
  export const RowType = styled.View<RowProps>`
    width: ${(props) => props.RowWidth || '100%'};
    margin: ${(props) => props.RowMargin || '0px'};
    padding: ${(props) => props.RowPadding || '0 20px'};
  
    flex-direction: ${(props) => props.flexDirection || 'column'};
    align-items: ${(props) => props.alignItems || 'center'};
    justify-content: ${(props) => props.justifyContent || 'center'};
  `;