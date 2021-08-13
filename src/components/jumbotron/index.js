import React from 'react';
import { Inner, Container, Title, Subtitle, Pane, Image, Item } from './styles/jumbotron';

function Jumbotron({ children, direction = 'row', ...restProps }) {  // if no direction gets passed it will default to row
  return (
    <Item direction={direction}>
      <Inner>
        {children}
      </Inner>
    </Item>
  )
}

// compound component examples
Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}

Jumbotron.Subtitle = function JumbotronSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
}

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps}></Image>;
}

export default Jumbotron;
