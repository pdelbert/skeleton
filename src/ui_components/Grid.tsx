import React from 'react'
import Grid from '@mui/material/Grid';

type GridSize = 'auto' | number;
type GridSpacing = number | string;
type GridWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type GridDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

type GridProps = {
    children: React.ReactNode;
    container: boolean;
    item: boolean;
    columns: number;
    spacing: GridSpacing;
    rowSpacing: GridSpacing;
    xs: boolean | GridSize;
    sm: boolean | GridSize;
    md: boolean | GridSize;
    lg: boolean | GridSize;
    xl: boolean | GridSize;
    wrap: GridWrap;
    direction: GridDirection;
    style: object;
}

const grid = ({
    children, 
    container, 
    item, 
    columns,
    spacing,
    rowSpacing, 
    direction,
    xs, sm, md, lg, xl,
    wrap,
    style
}: GridProps) => {
  return (
    <Grid 
      container={container}
      item={item}
      columns={columns}
      spacing={spacing}
      rowSpacing={rowSpacing} 
      direction={direction}
      style={style}
      xs={xs} 
      sm={sm} 
      md={md} 
      lg={lg} 
      xl={xl}>
      {children}
    </Grid>
  )
}

export default grid;
