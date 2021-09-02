import React from 'react';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';

function Browse() {
  const { series } = useContent('series');
  // console.log(series);
  const { films } = useContent('films');
  // console.log(films);

  const slides = selectionFilter({ series, films });
  console.log(slides);

  return <p>Hello from the Browse page!</p>;
}

export default Browse;
