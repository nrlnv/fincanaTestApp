import { StyleSheet } from 'react-native'
import { palette, spaces } from '../../theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    backgroundColor: palette.creme,
    paddingHorizontal: spaces.paddingHorizontal,
    justifyContent: 'space-between',
    paddingTop: 140,
  },
  textField: {
    width: '100%',
    marginBottom: spaces.baseSpace,
  },
})

export default styles
