import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

// styles
import { palette } from '../../theme'

const ArrowRight: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  color = palette.lushJungle,
  ...props
}) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      d="M17 7.25a.75.75 0 0 0 0 1.065l3.45 3.45H2.795a.75.75 0 1 0 0 1.5h17.64L17 16.692a.75.75 0 0 0 0 1.058.75.75 0 0 0 1.058 0l4.77-4.77a.66.66 0 0 0 0-.953L18.065 7.25a.75.75 0 0 0-1.065 0Z"
      fill={color}
    />
  </Svg>
)

export default ArrowRight
