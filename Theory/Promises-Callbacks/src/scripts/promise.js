import {teams} from './callbacks';

export const checkDriver = (id) => {
  return new Promise((resolve, reject) => {
    const team = teams[id];
    team ? setTimeout(() => resolve(team), 1000) : reject(
        `Team With id:${id} not found`);
  });
};

export const checkDriverAsync = async (id) => {
  const team = teams[id];
  if (team) return team;
  throw(`Team With id: ${id} not found`);
};

const lowPromise = new Promise(((resolve, reject) => {
  setTimeout(() => resolve('Low Promise'), 2000);
}));

const normalPromise = new Promise(((resolve, reject) => {
  setTimeout(() => resolve('Normal Promise'), 1500);
}));

const fastPromise = new Promise(((resolve, reject) => {
  setTimeout(() => resolve('Fast Promise'), 1000);
}));

export {
  lowPromise,
  normalPromise,
  fastPromise,
};
