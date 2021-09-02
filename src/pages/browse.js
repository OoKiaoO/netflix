import React from 'react';
// Custom Hooks
import { useContent } from '../hooks';
// Utils
import selectionFilter from '../utils/selection-filter';
// Containers
import BrowseContainer from '../containers/browse';

function Browse() {
  const { series } = useContent('series');
  // console.log(series);
  const { films } = useContent('films');
  // console.log(films);

  const slides = selectionFilter({ series, films });
  console.log(slides);

  return <BrowseContainer slides={slides} />;
}

export default Browse;
