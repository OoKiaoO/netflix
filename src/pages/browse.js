import React from 'react';
import { useContent } from '../hooks';

function Browse() {
  const { series } = useContent('series');
  // console.log(series);
  const { films } = useContent('films');
  // console.log(films);

  return <p>Hello from the Browse page!</p>;
}

export default Browse;
