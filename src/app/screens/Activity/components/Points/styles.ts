import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/colors';
import { Fonts } from '@/constants/fonts';
import { scale, verticalScale } from '@/utils/scale';

export const styles = StyleSheet.create({
  header: {
    ...Fonts.h5,
    marginVertical: verticalScale(20),
  },
  month: {
    ...Fonts.h4,
    fontFamily: 'Avenir-Black',
    marginBottom: verticalScale(7),
  },
  points: {
    ...Fonts.h1,
    textAlign: 'center',
  },
  card: {
    height: verticalScale(143),
    backgroundColor: Colors.blueRibbon,
    borderRadius: 20,
    paddingTop: verticalScale(20),
    paddingHorizontal: scale(18),
    marginHorizontal: scale(34),
  },
});
