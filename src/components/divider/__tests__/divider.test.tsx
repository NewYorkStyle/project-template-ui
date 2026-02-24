import React from 'react';

import {render, screen} from '@testing-library/react';

import {Divider} from '../divider';

describe('Divider', () => {
  it('should render with text', () => {
    render(<Divider>Content</Divider>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
