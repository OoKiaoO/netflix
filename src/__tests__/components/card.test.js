import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Card, Player } from '../../components';

const category = 'series';
const slideRows = [
  {
    title: 'Documentaries',
    data: [
      {
        id: '1a58ab7b-43fb-440a-af10-c5d50050968d',
        title: 'Tiger King',
        description:
          'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
        genre: 'documentaries',
        maturity: '18',
        slug: 'tiger-king',
        docId: 'EoY8MRyc0kPggbKT0xzc',
      },
    ],
  },
  {
    title: 'Comedies',
    data: [
      {
        id: '21c1c541-f34c-4572-a83e-28215afd11f1',
        title: 'The Office',
        description:
          'A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.',
        genre: 'comedies',
        maturity: '15',
        slug: 'the-office',
        docId: 'Cw5zc8sfQBQO3WOVOo2d',
      },
    ],
  },
];

describe('<Card />', () => {
  it('renders the <Card /> with populated data', () => {
    const { container, getByText } = render(
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );

    expect(getByText('Documentaries')).toBeTruthy();
    expect(getByText('Tiger King')).toBeTruthy();
    expect(
      getByText('An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.')
    ).toBeTruthy();

    expect(getByText('Comedies')).toBeTruthy();
    expect(getByText('The Office')).toBeTruthy();
    expect(
      getByText(
        'A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.'
      )
    ).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Card /> and toggles the feature', () => {
    const { container, queryByText, getByTestId, getByAltText } = render(
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item} data-testid={`${item.slug}-item-feature`}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );

    expect(queryByText('18')).toBeFalsy();
    fireEvent.click(getByTestId('tiger-king-item-feature'));
    expect(queryByText('18')).toBeTruthy();

    fireEvent.click(getByAltText('Close'));
    expect(queryByText('18')).toBeFalsy();

    expect(queryByText('15')).toBeFalsy();
    fireEvent.click(getByTestId('the-office-item-feature'));
    expect(queryByText('15')).toBeTruthy();

    fireEvent.click(getByAltText('Close'));
    expect(queryByText('15')).toBeFalsy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
