import React from 'react';
import { render } from '@testing-library/react';
import { Profiles } from '../../components';

describe('<Profiles />', () => {
  it('renders the <Profiles /> component with populated data', () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.Item onClick={() => {}}>
            <Profiles.Picture src="/images/user/3.png" data-testid="profile-picture" />
            <Profiles.Name>Chiara</Profiles.Name>
          </Profiles.Item>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText("Who's watching?")).toBeTruthy();
    expect(getByTestId('profile-picture')).toBeTruthy();
    expect(getByText('Chiara')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Profiles /> with populated data but misc profile image', () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.Item onClick={() => {}}>
            <Profiles.Picture src="/images/user/3.png" data-testid="profile-picture-misc" />
            <Profiles.Name>Chiara</Profiles.Name>
          </Profiles.Item>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText("Who's watching?")).toBeTruthy();
    expect(getByTestId('profile-picture-misc')).toBeTruthy();
    expect(getByText('Chiara')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
