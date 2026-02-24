import React from 'react';

import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {Input} from '../input';

describe('Input', () => {
  it('should render with placeholder', () => {
    render(<Input placeholder='Type here' />);

    expect(screen.getByPlaceholderText('Type here')).toBeInTheDocument();
  });

  it('should call onChange when user types', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Input placeholder='Type' onChange={handleChange} />);

    const input = screen.getByPlaceholderText('Type');
    await user.type(input, 'abc');

    expect(handleChange).toHaveBeenCalled();
  });

  it('should expose TextArea as static property', () => {
    expect(Input.TextArea).toBeDefined();
  });

  it('should expose Search as static property', () => {
    expect(Input.Search).toBeDefined();
  });

  it('should expose Password as static property', () => {
    expect(Input.Password).toBeDefined();
  });

  it('should expose OTP as static property', () => {
    expect(Input.OTP).toBeDefined();
  });
});
