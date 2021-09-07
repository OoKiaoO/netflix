import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import faqsData from '../../fixtures/faqs.json';
import { Accordion } from '../../components';

// container needed to use snapshot

describe('<Accordion />', () => {
  it('renders the <Accordion /> with populated data', () => {
    const { container, getByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );

    expect(getByText('Frequently Asked Questions')).toBeTruthy();
    expect(getByText('What is Netflix?')).toBeTruthy();
    expect(getByText('How much does Netflix cost?')).toBeTruthy();
    expect(getByText('Where can I watch?')).toBeTruthy();
    expect(getByText('How do I cancel?')).toBeTruthy();
    expect(getByText('What can I watch on Netflix?')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('opens and closes the <Accordion /> container', () => {
    const { container, queryByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );

    const whatIsNetflixBodyText =
      "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!";

    expect(queryByText(whatIsNetflixBodyText)).toBeFalsy();
    fireEvent.click(queryByText('What is Netflix?'));
    expect(queryByText(whatIsNetflixBodyText)).toBeTruthy();
    fireEvent.click(queryByText('What is Netflix?'));
    expect(queryByText(whatIsNetflixBodyText)).toBeFalsy();

    const howMuchNetflixCostBodyText =
      'Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one low fixed monthly fee. Plans start from £5.99 a month. No extra costs or contracts.';

    expect(queryByText(howMuchNetflixCostBodyText)).toBeFalsy();
    fireEvent.click(queryByText('How much does Netflix cost?'));
    expect(queryByText(howMuchNetflixCostBodyText)).toBeTruthy();
    fireEvent.click(queryByText('How much does Netflix cost?'));
    expect(queryByText(howMuchNetflixCostBodyText)).toBeFalsy();

    const whereCanIWatchBodyText =
      "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite programmes with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.";

    expect(queryByText(whereCanIWatchBodyText)).toBeFalsy();
    fireEvent.click(queryByText('Where can I watch?'));
    expect(queryByText(whereCanIWatchBodyText)).toBeTruthy();
    fireEvent.click(queryByText('Where can I watch?'));
    expect(queryByText(whereCanIWatchBodyText)).toBeFalsy();

    const howDoICancelBodyText =
      'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time.';

    expect(queryByText(howDoICancelBodyText)).toBeFalsy();
    fireEvent.click(queryByText('How do I cancel?'));
    expect(queryByText(howDoICancelBodyText)).toBeTruthy();
    fireEvent.click(queryByText('How do I cancel?'));
    expect(queryByText(howDoICancelBodyText)).toBeFalsy();

    const whatCanIWatchBodyText =
      'Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want.';

    expect(queryByText(whatCanIWatchBodyText)).toBeFalsy();
    fireEvent.click(queryByText('What can I watch on Netflix?'));
    expect(queryByText(whatCanIWatchBodyText)).toBeTruthy();
    fireEvent.click(queryByText('What can I watch on Netflix?'));
    expect(queryByText(whatCanIWatchBodyText)).toBeFalsy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
