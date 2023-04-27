import { render } from '@testing-library/react-native';
import React from 'react';
import { StatusBar } from 'react-native';

import { Colors } from '@/constants/colors';

import { CustomStatusBar } from './';

describe('CustomStatusBar', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<CustomStatusBar backgroundColor={Colors.white} />);
    const customStatusBar = getByTestId('custom-status-bar');
    expect(customStatusBar).toBeDefined();
  });

  it('sets the correct background color', async () => {
    const { getByTestId } = render(<CustomStatusBar backgroundColor={Colors.red} />);
    const customStatusBar = getByTestId('custom-status-bar');
    const statusBar = await customStatusBar.findByType(StatusBar);
    expect(statusBar.props.backgroundColor).toBe('red');
  });

  it('passes through additional props to StatusBar', async () => {
    const { getByTestId } = render(
      <CustomStatusBar backgroundColor={Colors.white} hidden={true} barStyle="dark-content" />
    );
    const customStatusBar = getByTestId('custom-status-bar');
    const statusBar = await customStatusBar.findByType(StatusBar);
    expect(statusBar.props.hidden).toBe(true);
    expect(statusBar.props.barStyle).toBe('dark-content');
  });
});
