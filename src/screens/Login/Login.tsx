import React, { FC } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'

// components
import TextField from '../../components/TextField/TextField'

// styles
import styles from './styles'
import Button from '../../components/Button/Button'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface LoginForm {
  email: string
  password: string
}

const formValidationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8),
})

const Login: FC = () => {
  const methods = useForm<LoginForm>({
    resolver: yupResolver(formValidationSchema),
    mode: 'onChange',
  })

  const { bottom } = useSafeAreaInsets()

  const paddingStyle = { paddingBottom: bottom }

  const {
    handleSubmit,
    formState: { isValid },
  } = methods

  const onSubmit = (values: LoginForm) => {
    console.log(values)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <FormProvider {...methods}>
        <ScrollView contentContainerStyle={[styles.content, paddingStyle]}>
          <View>
            <TextField
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus
              name="email"
              label="email*"
              style={styles.textField}
            />
            <TextField
              name="password"
              label="password*"
              secureTextEntry
              style={styles.textField}
            />
          </View>
          <Button onPress={handleSubmit(onSubmit)} disabled={!isValid}>
            login
          </Button>
        </ScrollView>
      </FormProvider>
    </KeyboardAvoidingView>
  )
}

export default Login
