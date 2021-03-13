import {teams} from './callbacks';

export const checkDriver = (id) => {
  return new Promise((resolve, reject) => {
    const team = teams[id];
    team ? resolve(team) : reject(`Team With id:${id} not found`);
  });
};