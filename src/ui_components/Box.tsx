import React from 'react'
import Box from '@mui/material/Box';

type BoxProps = {
    children: React.ReactNode,
    className: string,
    height: number, 
    width: string,
    gap: number,
    my: number,
    p: number,
    sx: object
}

const box = ({children, className, height, width, gap, my, p, sx}: BoxProps) => {
  return (
    <Box
        className={className}
        height={height}
        width={width}
        my={my}
        gap={gap}
        p={p}
        sx={sx}>
        {children}
      </Box>
  )
}

export default box;
