import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { Pressable } from 'react-native'

// components
import Text from '../Text/Text'

// assets
import ArrowLeft from '../../assets/icons/ArrowLeft'

// styles
import { palette } from '../../theme'
import styles from './styles'

interface BackHeaderProps {
  label?: string
}

const BackHeader: FC<BackHeaderProps> = ({ label }) => {
  const navigation = useNavigation()
  return (
    <Pressable style={styles.container} onPress={navigation.goBack}>
      <ArrowLeft color={palette.thamarBlack} />
      <Text text={label} preset="h4" style={styles.label} />
    </Pressable>
  )
}

export default BackHeader
