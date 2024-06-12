import React from 'react'
import Avatar from '@mui/material/Avatar';

type AvatarProps = {
  text: string,
  sx: object,
  alt: string,
  src: string
}

const avatar = ({text, sx, alt, src }: AvatarProps) => {
  return (
    <div>
    <Avatar 
        alt={alt} 
        src={src} 
        sx={sx}>
      {text}
    </Avatar>
    </div>
  )
}

export default avatar;
