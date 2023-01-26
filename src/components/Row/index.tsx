import React from 'react';
import { RowType, RowProps } from './styles';

const Row = (
  {
    children,
    RowWidth,
    RowMargin,
    RowPadding,
    flexDirection,
    alignItems,
    justifyContent,
  }: RowProps) => {
  return (
    <RowType
        RowWidth={RowWidth}
        RowMargin={RowMargin}
        RowPadding={RowPadding}
        flexDirection={flexDirection}
        justifyContent={justifyContent}
    >
      {children}
    </RowType>
  )
}

export default Row;