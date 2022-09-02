import React, { MutableRefObject, useState } from 'react'
import { Controller, FieldError, useFormContext } from 'react-hook-form'
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'

// assets
import Eye from '../../assets/icons/Eye'
import EyeClosed from '../../assets/icons/EyeClosed'
import ValidChecked from '../../assets/icons/ValidChecked'

// components
import Text from '../Text/Text'

// style
import styles from './styles'
import { palette } from '../../theme'

export interface TextFieldProps extends TextInputProps {
  label?: string
  style?: StyleProp<ViewStyle>
  inputStyle?: TextStyle | TextStyle[]
  name: string
  defaultValue?: string
  error?: FieldError
  limit?: number
  mask?: string
  isValid?: boolean
  inputRef?: MutableRefObject<TextInput | undefined>
}

export default function TextField(props: TextFieldProps) {
  const {
    placeholder,
    label,
    style: styleOverride,
    inputStyle: inputStyleOverride,
    secureTextEntry,
    name,
    defaultValue = '',
    error,
    limit,
    isValid,
    inputRef,
    ...rest
  } = props

  const { control } = useFormContext()

  const [passwordVisibility, setPasswordVisibility] = useState(false)

  return (
    <Controller
      control={control}
      render={({ field: { onChange, value, onBlur } }) => {
        return (
          <>
            <View style={[styles.wrapper, styleOverride]}>
              {!!label && (
                <Text
                  preset={'s1'}
                  style={styles.label}
                  color={palette.lushJungle}>
                  {label}
                </Text>
              )}
              <View style={styles.inputWrapper}>
                <TextInput
                  ref={inputRef}
                  value={value}
                  style={[
                    styles.input,
                    secureTextEntry && styles.inputWithIcon,
                    inputStyleOverride,
                  ]}
                  onBlur={onBlur}
                  secureTextEntry={secureTextEntry && !passwordVisibility}
                  placeholder={placeholder}
                  clearButtonMode={
                    secureTextEntry ? undefined : 'while-editing'
                  }
                  onChangeText={(formatted: string) => {
                    if (limit) {
                      const slicedValue = formatted?.slice(0, limit)
                      onChange(slicedValue)
                    } else {
                      onChange(formatted)
                    }
                  }}
                  {...rest}
                />
                {secureTextEntry && (
                  <TouchableOpacity
                    style={styles.showPasswordButton}
                    onPress={() => setPasswordVisibility(!passwordVisibility)}
                    hitSlop={{ top: 20, bottom: 20 }}>
                    {passwordVisibility ? <Eye /> : <EyeClosed />}
                  </TouchableOpacity>
                )}
                {isValid && <ValidChecked style={styles.valid} />}
              </View>
              {error && (
                <Text color={palette.error} preset={'s2'}>
                  {error.message}
                </Text>
              )}
            </View>
            {limit && (
              <View>
                <Text preset={'b2'}>
                  {value?.length || 0}/{limit} Characters
                </Text>
              </View>
            )}
          </>
        )
      }}
      name={name}
      defaultValue={defaultValue}
    />
  )
}
