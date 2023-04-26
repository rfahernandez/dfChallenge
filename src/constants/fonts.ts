import { TextStyle } from 'react-native';

import { verticalScale } from '@/utils/scale';

// helper function which infers keys and restricts values to ElementType
const createFonts = <T>(et: { [K in keyof T]: TextStyle }) => et;

// Note: these were taken from mobile's Figma.
export const Fonts = createFonts({
  h1: {
    fontFamily: 'Avenir-Black',
    fontSize: verticalScale(32),
    lineHeight: verticalScale(43),
  },
  h2: {
    fontFamily: 'Avenir-Black',
    fontSize: verticalScale(24),
    lineHeight: verticalScale(24),
  },
  h3: {
    fontFamily: 'Avenir-Black',
    fontSize: verticalScale(20),
    lineHeight: verticalScale(27.32),
  },
  h4: {
    fontFamily: 'Avenir-Roman',
    fontSize: verticalScale(16),
    lineHeight: verticalScale(21.86),
  },
  h5: {
    fontFamily: 'Avenir-Black',
    fontSize: verticalScale(14),
    lineHeight: verticalScale(19.12),
  },
  paragraph: {
    fontFamily: 'Avenir-Black',
    fontSize: verticalScale(12),
    lineHeight: verticalScale(16.39),
  },
});
