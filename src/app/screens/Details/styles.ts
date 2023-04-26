import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/colors';
import { Fonts } from '@/constants/fonts';
import { scale, verticalScale } from '@/utils/scale';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.periwinkle,
    width: '100%',
    justifyContent: 'flex-end',
    paddingHorizontal: scale(20),
    paddingBottom: scale(24),
  },
  productName: Fonts.h2,
  content: {
    flex: 1,
    backgroundColor: Colors.alabaster,
    paddingHorizontal: scale(20),
  },
  card: {
    borderRadius: 10,
    marginTop: verticalScale(19),
    marginBottom: verticalScale(32),
    backgroundColor: Colors.white,
  },
  asset: {
    height: verticalScale(350),
    width: scale(353),
    borderRadius: 10,
  },
  description: {
    ...Fonts.h5,
    marginBottom: verticalScale(19),
  },
  accept: Fonts.h4Bold,
  date: {
    ...Fonts.h4Bold,
    marginBottom: verticalScale(20),
  },
  points: {
    ...Fonts.h2,
    marginBottom: verticalScale(47),
  },
});
