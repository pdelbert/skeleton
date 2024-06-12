import React from 'react'
import Grid from '@mui/material/Grid';

type GridProps = {
    children: React.ReactNode,
    container: boolean,
    item: boolean,
    columns: number,
    spacing: string | number, 
    rowSpacing: number | string,
    xs: 'auto' | number | boolean,
    sm: 'auto' | number | boolean,
    md: 'auto' | number | boolean,
    lg: 'auto' | number | boolean,
    xl: 'auto' | number | boolean,
    wrap: 'nowrap' | 'wrap-reverse' | 'wrap',
    direction: 'column-reverse' | 'column' | 'row-reverse' | 'row',
    style: object
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
