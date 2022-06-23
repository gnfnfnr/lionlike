let moviea = [
  {
    id: 1,
    title: "Ace of Diamond",
    detail: "baseball",
    year: 2019,
  },
  {
    id: 2,
    title: "새벽의 연화",
    detail: "신화이야기",
    year: 2014,
  },
  {
    id: 3,
    title: "헌터x헌터",
    detail: "헌터되기",
    year: 2011,
  },
  {
    id: 4,
    title: "어과초",
    detail: "초능력",
    year: 2020,
  },
];

export function getMovies() {
  return moviea;
}

export function getMovie(id) {
  return moviea.find((movie) => movie.id === id);
}
