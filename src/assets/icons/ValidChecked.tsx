import React, { FC } from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

interface ValidCheckedProps extends SvgProps {
  size?: number
}

const ValidChecked: FC<ValidCheckedProps> = ({ size = 20, ...props }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.317 5.183a.625.625 0 010 .884l-8.75 8.75a.625.625 0 01-.884 0l-4.375-4.375a.625.625 0 11.884-.884l3.933 3.933 8.308-8.308a.625.625 0 01.884 0z"
        fill="#27AE60"
      />
    </Svg>
  )
}

export default ValidChecked
