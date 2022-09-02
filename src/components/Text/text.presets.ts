import { TextStyle } from 'react-native'

export const presets: Record<string, TextStyle> = {
  h2: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 31.2,
    letterSpacing: 0.35,
  },
  h3: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 29.1,
    letterSpacing: 2.35,
  },
  h4: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20.8,
    letterSpacing: 0.35,
  },
  h5: {
    fontWeight: '400',
    fontSize: 32,
    lineHeight: 41.6,
    letterSpacing: -1.65,
  },
  h6: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 23.28,
    letterSpacing: 0.485,
    textTransform: 'uppercase',
  },
  p1: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.35,
  },
  p2: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: -0.15,
  },
  p4: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16.32,
    letterSpacing: 0.35,
    textTransform: 'uppercase',
  },
  b1: {
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 31.2,
    letterSpacing: 0.35,
  },
  b2: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18.2,
    letterSpacing: 0.985,
    textTransform: 'uppercase',
  },
  s1: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.985,
    textTransform: 'uppercase',
  },
  s2: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0.985,
  },
  s3: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0.385,
  },
  s4: {
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '400',
    letterSpacing: 0.985,
  },
  l1: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.4,
  },
  l2: {
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 28.92,
    letterSpacing: 0.435,
    textAlign: 'center',
  },
}

export type TextPresets = keyof typeof presets
