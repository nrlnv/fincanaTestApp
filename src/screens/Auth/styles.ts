import { StyleSheet } from 'react-native'
import { palette, spaces } from '../../theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.creme,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spaces.paddingHorizontal,
  },
  button: {
    marginTop: spaces.baseSpace,
  },
})

export default styles
