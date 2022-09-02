import * as React from 'react'
import {
  ActivityIndicator,
  Pressable,
  TextStyle,
  ViewStyle,
} from 'react-native'

// components
import Text from '../Text/Text'

// styles
import * as styles from './styles'

interface ButtonProps {
  style?: ViewStyle | ViewStyle[]
  textStyle?: TextStyle
  onPress?: () => void
  disabled?: boolean
  icon?: Element
  small?: boolean
  secondary?: boolean
  isLoading?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    style,
    onPress,
    disabled = false,
    children,
    icon,
    textStyle,
    small,
    secondary,
    isLoading,
  } = props

  const isDisabled = disabled || isLoading

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button({ small, pressed, disabled: isDisabled, secondary }),
        style,
      ]}
      onPress={onPress}
      disabled={isDisabled}>
      {icon}
      <Text
        preset={'b2'}
        style={{
          ...styles.text({ disabled: isDisabled, secondary }),
          ...textStyle,
        }}>
        {children}
      </Text>
      {isLoading && <ActivityIndicator style={styles.activityIndicator} />}
    </Pressable>
  )
}

export default Button
