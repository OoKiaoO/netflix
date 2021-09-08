import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Home } from '../../pages';

describe('Homepage', () => {
  test('renders the Homepage', () => {
    const { getByText, getAllByPlaceholderText, getAllByText } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(getByText('Unlimited films, TV programmes and more.')).toBeTruthy();
    expect(getByText('Watch anywhere. Cancel at any time.')).toBeTruthy();
    expect(getAllByText('Try it Now')).toBeTruthy();
    expect(getAllByText('Ready to watch? Enter your email to create or restart your membership')).toBeTruthy();
    expect(getAllByPlaceholderText('Email Address')).toBeTruthy();
  });
});
