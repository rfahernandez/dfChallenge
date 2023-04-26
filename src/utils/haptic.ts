import { Platform } from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

export namespace Haptic {
  export function success() {
    switch (Platform.OS) {
      case 'ios':
        ReactNativeHapticFeedback.trigger('impactLight', options);
        return;
      case 'android':
        ReactNativeHapticFeedback.trigger('effectTick', options);
        return;
      default:
        throw new Error(`Unsupported platform ${Platform.OS} for haptic feedback`);
    }
  }

  export function cancel() {
    switch (Platform.OS) {
      case 'ios':
        ReactNativeHapticFeedback.trigger('soft', options);
        return;
      case 'android':
        ReactNativeHapticFeedback.trigger('virtualKeyRelease', options);
        return;
      default:
        throw new Error(`Unsupported platform ${Platform.OS} for haptic feedback`);
    }
  }
}
