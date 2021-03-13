// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arrMovies) {
  return arrMovies.map(movie => movie.director).
      reduce((director, currDirector) => {
        (!director.includes(currDirector)) && director.push(currDirector);
        return director;
      }, []);

}

// (!director.includes(currDirector)) && director.push(currDirector);
// return director;
// console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// COMPLETED
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  return movies.filter(movies => movies.director === ('Steven Spielberg') &&
      movies.genre.includes('Drama')).length;
}

// console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length <= 0) return 0;
  return parseFloat((movies.reduce((acc, movie) => {
        movie.rate = (!movie.rate) ? 0 : movie.rate;
        return acc + movie.rate;
      }, 0) /
      movies.length).toFixed(2));
}

// console.log(ratesAverage([{rate: 6}, {rate: ''}, {}]));
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  const onlyDrama = movies.filter(({genre}) => genre.includes('Drama'));
  return (onlyDrama.length > 0)
      ? parseFloat((onlyDrama.reduce((acc, {rate}) => (acc + rate), 0) /
          onlyDrama.length).toFixed(2))
      : 0;
}

console.log(dramaMoviesRate([
  {genre: ['Drama'], rate: 8},
  {genre: ['Romance'], rate: 9},
  {genre: ['Drama'], rate: 7},
]));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  return [...movies].sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    return (a.title < b.title) ? -1 : 1;
  });
}

// console.log(orderByYear([
//   {title: 'abc', year: 2002},
//   {title: 'bac', year: 1982},
//   {title: 'aab', year: 1982},
// ]));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  return movies.map(({title}) => title).sort().reduce((acc, title, i) => {
    (i < 20) && acc.push(title);
    return acc;
  }, []);
}

// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  const time = movies.map(movie => {
    if (typeof movie['duration'] === 'number') return movie;
    let h = movie['duration'].indexOf('h');
    let min = movie['duration'].indexOf('min');
    let t = ([
      {h: parseInt(movie['duration'].slice(h - 1, h).trim())},
      {min: parseInt(movie['duration'].slice(h + 1, min).trim())},
    ]);
    movie['duration'] = ((t[0].h || 0) * 60) + (t[1].min || 0);
    return movie;
  });

  // return [((time[0].h || 0) * 60) + (time[1].min || 0)]
  return time;
}

// console.log(turnHoursToMinutes([{duration: '5h 41min'}]));
// console.log(turnHoursToMinutes([{duration: '2h'}]));
// console.log(turnHoursToMinutes([{duration: '54min'}]));
// console.log(turnHoursToMinutes([{duration: '0h 31min'}]));
// console.log(turnHoursToMinutes([{
//   "title":"The Shawshank Redemption",
//   "year":1994,
//   "director":"Frank Darabont",
//   "duration":142,
//   "genre":["Crime","Drama"],
//   "rate":9.3
// }]));
//
// console.log(turnHoursToMinutes(movies));
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
  const rateSum = movies.reduce((acc, curr) => {
    acc[curr.year] = acc[curr.year] + curr.rate || curr.rate;
    return acc;
  }, {});
  const yearSum = movies.reduce((acc, curr) => {
    acc[curr.year] = acc[curr.year] + 1 || 1;
    return acc;
  }, {});

  const sorted = movies.sort((a, b) => b.rate - a.rate);
  if (sorted[0].year && yearSum[0]) {
    return `The best year was ${yearSum[0]} with an average rate of ${ rateSum[0]/ yearSum[0]}`;
  }
  return `The best year was ${sorted[0].year} with an average rate of ${rateSum[0]/ yearSum[0]}`;

}

console.log(bestYearAvg([
  {year: 2000, rate: 9},
  {year: 2000, rate: 8},
  {year: 1978, rate: 10},
  {year: 1978, rate: 7},
]));