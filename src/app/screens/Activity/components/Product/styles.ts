import { StyleSheet } from 'react-native';

import { Fonts } from '@/constants/fonts';
import { scale, verticalScale } from '@/utils/scale';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: verticalScale(8),
  },
  asset: {
    height: verticalScale(55),
    width: verticalScale(55),
    borderRadius: 10,
    marginRight: scale(11),
  },
  infoContainer: {
    justifyContent: 'space-evenly',
    flex: 1,
  },
  name: Fonts.h5,
  date: {
    ...Fonts.paragraph,
    fontFamily: 'Avenir-Roman',
  },
  pointsContainer: {
    justifyContent: 'center',
  },
  points: {
    ...Fonts.h5,
  },
  chevron: {
    height: verticalScale(10),
    width: verticalScale(10),
    alignSelf: 'center',
    marginLeft: scale(23),
  },
});
