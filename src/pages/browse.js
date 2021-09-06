import React from 'react';
// Custom Hooks
import { useContent } from '../hooks';
// Utils
import selectionFilter from '../utils/selection-filter';
// Containers
import BrowseContainer from '../containers/browse';

function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = selectionFilter({ series, films });

  console.log(films);
  return <BrowseContainer slides={slides} />;
}

export default Browse;
