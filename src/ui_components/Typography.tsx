import React from 'react'
import Typography from '@mui/material/Typography';

type TypographyProps = {
  text: string,
  align: 'center' | 'inherit' | 'justify' | 'left' | 'right',
  variant: 'body1'| 'body2' | 'button' | 'caption' | 'h1'| 'h2'| 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'overline' | 'subtitle1' | 'subtitle2'
  sx: object
}

const tipography = ({text, align, variant, sx }: TypographyProps) => {
  return (
    <Typography align={align} variant={variant} sx={sx}>
      {text}
    </Typography>
  )
}

export default tipography;
