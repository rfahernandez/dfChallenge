import { TextStyle } from 'react-native';

import { verticalScale } from '@/utils/scale';

// helper function which infers keys and restricts values to ElementType
const createFonts = <T>(et: { [K in keyof T]: TextStyle }) => et;

// Note: these were taken from mobile's Figma.
export const Fonts = createFonts({
  h1: {
    fontFamily: 'Avenir-Black',
    fontSize: verticalScale(32),
  },
  h2: {
    fontFamily: 'Avenir-Black',
    fontSize: verticalScale(24),
  },
  h3: {
    fontFamily: 'Avenir-Black',
    fontSize: verticalScale(20),
  },
  h4: {
    fontFamily: 'Avenir-Roman',
    fontSize: verticalScale(16),
  },
  h4Bold: {
    fontFamily: 'Avenir-Black',
    fontSize: verticalScale(16),
  },
  h5: {
    fontFamily: 'Avenir-Black',
    fontSize: verticalScale(14),
  },
  paragraph: {
    fontFamily: 'Avenir-Black',
    fontSize: verticalScale(12),
  },
});
