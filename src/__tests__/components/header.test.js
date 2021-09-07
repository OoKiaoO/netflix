import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Header } from '../../components';

describe('<Header />', () => {
  it('renders the full <Header /> with a background', () => {
    const { container, getByTestId, getByText } = render(
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Search searchTerm="Joker" setSearchTerm={() => {}} />
            <Header.Profile>
              <Header.Picture src="/images/user/4png" />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src="/images/user/4png" />
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>Forever alone in a crowd..</Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
    );

    expect(getByTestId('search-input')).toBeTruthy();
    expect(getByTestId('search-input').value).toBe('Joker');
    fireEvent.change(getByTestId('search-input'), {
      target: { value: 'Simpsons' },
    });
    fireEvent.click(getByTestId('search-click'));

    expect(getByText('Watch Joker Now')).toBeTruthy();
    expect(getByText('Forever alone in a crowd..')).toBeTruthy();
    expect(getByText('Play')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
