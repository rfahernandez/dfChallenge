import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/colors';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.alabaster,
  },
  content: {
    backgroundColor: Colors.alabaster,
    marginHorizontal: 20,
    marginBottom: 40,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
