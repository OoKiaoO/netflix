import selectionFilter from '../../utils/selection-filter';

test('selectionFilter with legitimate data', () => {
  const series = [
    {
      id: '1a58ab7b-43fb-440a-af10-c5d50050968d',
      title: 'Tiger King',
      description: 'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
      genre: 'documentaries',
      maturity: '18',
      slug: 'tiger-king',
    },
  ];
  const films = [
    {
      id: '33c6fc53-8ed7-4cbe-bd0b-7b65073069b9',
      title: 'Titanic',
      description:
        'Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.',
      genre: 'romance',
      maturity: '15',
      slug: 'titanic',
    },
  ];

  const slides = selectionFilter({ series, films });
  expect(slides.series[0].title).toBe('Documentaries');
  expect(slides.series[0].data[0].description).toBe(
    'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.'
  );
  expect(slides.series[0].data[0].title).toBe('Tiger King');
  expect(slides.series[0].data[0].id).toBe('1a58ab7b-43fb-440a-af10-c5d50050968d');
  expect(slides.series[0].data[0].genre).toBe('documentaries');
  expect(slides.series[0].data[0].maturity).toBe('18');
  expect(slides.series[0].data[0].slug).toBe('tiger-king');

  expect(slides.films[4].title).toBe('Romance');
  expect(slides.films[4].data[0].id).toBe('33c6fc53-8ed7-4cbe-bd0b-7b65073069b9');
  expect(slides.films[4].data[0].title).toBe('Titanic');
  expect(slides.films[4].data[0].description).toBe(
    'Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.'
  );
  expect(slides.films[4].data[0].genre).toBe('romance');
  expect(slides.films[4].data[0].maturity).toBe('15');
  expect(slides.films[4].data[0].slug).toBe('titanic');
});

test('selectionFilter with no data', () => {
  const slides = selectionFilter({});
  expect(slides.series[1].title).toBe('Comedies');
  expect(slides.films[1].title).toBe('Thriller');
  expect(slides.series[0].data).toBe(undefined);
  expect(slides.films[0].data).toBe(undefined);
});
