import { TextStyle, ViewStyle } from 'react-native'
import { palette, spaces } from '../../theme'

export const button = ({
  pressed,
  disabled,
  small,
  secondary,
}: {
  pressed?: boolean
  disabled?: boolean
  small?: boolean
  secondary?: boolean
}): ViewStyle => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'stretch',
  backgroundColor: secondary
    ? pressed
      ? '#F0F1ED'
      : palette.creme
    : disabled
    ? palette.disabled
    : pressed
    ? palette.pressed
    : palette.oliveGreen,
  borderColor: secondary
    ? disabled
      ? '#949B86'
      : pressed
      ? '#99A186'
      : palette.oliveGreen
    : 'transparent',
  borderWidth: 1,
  paddingVertical: small ? 8 : 11,
  paddingHorizontal: small ? 10 : 11,
  position: 'relative',
})

export const textButton = ({
  pressed,
  disabled,
}: {
  pressed?: boolean
  disabled?: boolean
}): ViewStyle => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
  position: 'relative',
  borderBottomWidth: 1,
  borderBottomColor: disabled
    ? '#949B86'
    : pressed
    ? '#393F2C'
    : palette.oliveGreen,
})

export const text = ({
  disabled,
  secondary,
}: {
  disabled?: boolean
  secondary?: boolean
}): TextStyle => ({
  color: secondary ? (disabled ? '#949B86' : palette.oliveGreen) : '#FBF8ED',
})

export const activityIndicator: ViewStyle = {
  position: 'absolute',
  top: spaces.baseSpace * 2,
  right: spaces.baseSpace * 2,
}
