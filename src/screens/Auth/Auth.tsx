import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { FC, useCallback } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MainStackParamsList } from '../../appNavigator/appNavigator'

// components
import Button from '../../components/Button/Button'

// styles
import styles from './styles'

const Auth: FC<NativeStackScreenProps<MainStackParamsList, 'Auth'>> = ({
  navigation,
}) => {
  const { top } = useSafeAreaInsets()
  const paddingStyle = { paddingTop: top }
  const onLoginPress = useCallback(() => {
    navigation.navigate('Login')
  }, [navigation])

  return (
    <View style={[styles.container, paddingStyle]}>
      <Button>Создать аккаунт</Button>
      <Button style={styles.button} onPress={onLoginPress}>
        Войти
      </Button>
    </View>
  )
}

export default Auth
