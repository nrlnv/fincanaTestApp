import { StyleSheet } from 'react-native'

// styles
import { palette, spaces } from '../../theme'
import { presets } from '../Text/text.presets'

const styles = StyleSheet.create({
  wrapper: {},
  label: {
    marginBottom: spaces.baseSpace * 2,
  },
  inputWrapper: {
    position: 'relative',
    marginBottom: 8,
  },
  input: {
    borderBottomColor: palette.thamarBlack,
    borderBottomWidth: 1,
    paddingBottom: 9,
    ...presets.l1,
  },
  inputWithIcon: {
    paddingRight: 40,
  },
  showPasswordButton: {
    position: 'absolute',
    bottom: 0,
    right: 5,
  },
  valid: {
    position: 'absolute',
    top: 10,
    right: 12,
  },
  limitText: {
    textAlign: 'right',
  },
})

export default styles
