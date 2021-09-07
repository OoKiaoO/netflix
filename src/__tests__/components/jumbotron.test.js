import React from 'react';
import { render } from '@testing-library/react';
import { Jumbotron } from '../../components';
import jumboData from '../../fixtures/jumbo.json';

describe('<Jumbotron />', () => {
  it('renders the <Jumbotron /> with populated data', () => {
    const { container, getByText, getByAltText, getByTestId } = render(
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.Subtitle>{item.subtitle}</Jumbotron.Subtitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image} alt={item.alt} data-testid={`${item.id}-jumbo-img`} />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    );

    expect(getByText('Enjoy on your TV.')).toBeTruthy();
    expect(getByAltText('Tiger King on Netflix')).toBeTruthy();
    expect(getByTestId('1-jumbo-img')).toBeTruthy();
    expect(
      getByText('Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.')
    ).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();

    expect(getByText('Download your programmes to watch on the go.')).toBeTruthy();
    expect(getByAltText('Watch on mobile')).toBeTruthy();
    expect(getByTestId('2-jumbo-img')).toBeTruthy();
    expect(getByText('Save your data and watch all your favourites offline.')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();

    expect(getByText('Watch everywhere.')).toBeTruthy();
    expect(getByAltText('Money Heist on Netflix')).toBeTruthy();
    expect(getByTestId('3-jumbo-img')).toBeTruthy();
    expect(
      getByText('Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.')
    ).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
