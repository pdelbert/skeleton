import React from 'react'

type ImageProps = {
    alt: string,  
    src: string,
    style: object
}

const Image = ({alt, src, style}: ImageProps) => {
  return (
    <img 
        alt={alt} 
        src={src} 
        style={style} />
  )
}

export default Image;
