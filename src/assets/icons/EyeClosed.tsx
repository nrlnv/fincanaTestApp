import * as React from 'react'

import Svg, { Path, SvgProps } from 'react-native-svg'
import { palette } from '../../theme'

function EyeClosed(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.761 15.264a.75.75 0 011.025.272l2.863 4.938a.75.75 0 01-1.298.752l-2.863-4.937a.75.75 0 01.273-1.025zM19.145 17.924a.75.75 0 01.868.608l.888 5.038a.75.75 0 01-1.477.26l-.888-5.037a.75.75 0 01.609-.87zM12.842 17.911a.75.75 0 01.609.869l-.888 5.05a.75.75 0 11-1.477-.26l.888-5.05a.75.75 0 01.868-.609zM7.225 15.263a.75.75 0 01.275 1.024L4.637 21.25a.75.75 0 11-1.3-.75L6.2 15.538a.75.75 0 011.025-.275z"
        fill={palette.thamarBlack}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.529 12.53a.75.75 0 011.054.111C6.601 15.14 10.257 18.25 16 18.25c5.743 0 9.4-3.111 11.417-5.609a.75.75 0 111.166.943C26.402 16.286 22.358 19.75 16 19.75S5.6 16.286 3.417 13.584a.75.75 0 01.112-1.055z"
        fill={palette.thamarBlack}
      />
    </Svg>
  )
}

export default EyeClosed
