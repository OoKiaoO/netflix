// organizing the data exported from firebase to have it ordered by title,
// so that we will be able to use it as section title for each genre when displaying it on browse page

export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: 'Documentaries',
        data: series.filter((item) => item.genre === 'documentaries'),
      },
      {
        title: 'Comdedies',
        data: series.filter((item) => item.genre === 'comedies'),
      },
      {
        title: 'Children',
        data: series.filter((item) => item.genre === 'children'),
      },
      {
        title: 'Crime',
        data: series.filter((item) => item.genre === 'crime'),
      },
      {
        title: 'Feel Good',
        data: series.filter((item) => item.genre === 'feel-good'),
      },
    ],
    films: [
      {
        title: 'Drama',
        data: films.filter((item) => item.genre === 'drama'),
      },
      {
        title: 'Thriller',
        data: films.filter((item) => item.genre === 'thriller'),
      },
      {
        title: 'Children',
        data: films.filter((item) => item.genre === 'children'),
      },
      {
        title: 'Suspence',
        data: films.filter((item) => item.genre === 'suspence'),
      },
      {
        title: 'Romance',
        data: films.filter((item) => item.genre === 'romance'),
      },
    ],
  };
}
