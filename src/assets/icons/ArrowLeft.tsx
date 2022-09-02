import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ArrowLeft: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  color = '#F9F6F1',
  ...props
}) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      d="M7.5 17.25a.75.75 0 0 0 0-1.065l-3.45-3.45h17.655a.75.75 0 0 0 0-1.5H4.065L7.5 7.807a.75.75 0 0 0 0-1.057.75.75 0 0 0-1.058 0l-4.77 4.77a.66.66 0 0 0 0 .953l4.763 4.777a.752.752 0 0 0 1.065 0Z"
      fill={color}
    />
  </Svg>
)

export default ArrowLeft
