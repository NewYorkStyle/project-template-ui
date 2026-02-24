import React from 'react';

import {render, screen} from '@testing-library/react';

import {Flex} from '../flex';

describe('Flex', () => {
  it('should render children', () => {
    render(
      <Flex data-testid='flex'>
        <span>Child</span>
      </Flex>
    );

    expect(screen.getByTestId('flex')).toBeInTheDocument();
    expect(screen.getByText('Child')).toBeInTheDocument();
  });
});
