import { render } from '@testing-library/react-native';
import React from 'react';

import { LoadingImage } from '@/components';

describe('LoadingImage Component', () => {
  it('renders correctly with loading state', () => {
    const source = { uri: 'https://example.com/image.jpg' };
    const { getByTestId } = render(<LoadingImage source={source} style={undefined} />);
    const loader = getByTestId('loader');
    const image = getByTestId('image');
    expect(loader).toBeTruthy();
    expect(image).toBeTruthy();
    expect(loader.props.style.position).toBe('absolute');
    expect(loader.props.style.top).toBe(0);
    expect(loader.props.style.left).toBe(0);
  });

  it('renders correctly without loading state', () => {
    const source = { uri: 'https://example.com/image.jpg' };
    const { getByTestId } = render(<LoadingImage source={source} style={undefined} />);
    const image = getByTestId('image');
    expect(image).toBeTruthy();
  });
});
