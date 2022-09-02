import React, { useRef } from 'react'
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types'

// screens
import Auth from '../screens/Auth/Auth'
import Login from '../screens/Login/Login'

// components
import BackHeader from '../components/BackHeader/BackHeader'

// styles
import { palette } from '../theme'

// types
export type MainStackParamsList = {
  Auth: undefined
  Login: undefined
}

export const baseScreenOptions = {
  headerStyle: {
    backgroundColor: palette.creme,
  },
  headerTitleStyle: {
    fontSize: 16,
    letterSpacing: 0.35,
  },
  contentStyle: {
    backgroundColor: palette.creme,
  },
}

const noHeaderContentStyles = {
  gestureEnabled: false,
  headerShown: false,
}

export const headerWithBackButtonStyles = {
  gestureEnabled: false,
  headerTitle: '',
  headerShadowVisible: false,
  headerStyle: { ...baseScreenOptions.headerStyle },
  contentStyle: { ...baseScreenOptions.contentStyle },
  headerLeft: ({ canGoBack, label = '' }: HeaderBackButtonProps) =>
    canGoBack && <BackHeader label={label} />,
}

const MainStack = createNativeStackNavigator<MainStackParamsList>()

const AppNavigator = () => {
  const navigationRef =
    useRef<NavigationContainerRef<MainStackParamsList>>(null)

  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator initialRouteName={'Auth'}>
        <MainStack.Group>
          <MainStack.Screen
            options={noHeaderContentStyles}
            name={'Auth'}
            component={Auth}
          />
          <MainStack.Screen
            options={headerWithBackButtonStyles}
            name={'Login'}
            component={Login}
          />
        </MainStack.Group>
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
