import * as React from 'react'
import {
  StyleProp,
  Text as ReactNativeText,
  TextProps as TextProperties,
  TextStyle,
} from 'react-native'

// styles
import { presets, TextPresets } from './text.presets'
import { palette } from '../../theme'

export interface TextProps extends TextProperties {
  children?: React.ReactNode
  text?: string
  style?: StyleProp<TextStyle>
  preset?: TextPresets
  color?: string
}

const Text: React.FC<TextProps> = (props) => {
  // grab the props
  const {
    preset = 'p1',
    text,
    children,
    color = palette.thamarBlack,
    style: styleOverride,
    ...rest
  } = props

  // figure out which content to use
  const content = text || children

  return (
    <ReactNativeText
      {...rest}
      style={[presets[preset], { color }, styleOverride]}>
      {content}
    </ReactNativeText>
  )
}

export default Text
