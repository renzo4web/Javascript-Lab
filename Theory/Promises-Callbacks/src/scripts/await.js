import {checkDriver, checkDriverAsync} from './promise';

const teamsId = ['ferrari', 'mercedes', 'renault'];
const teamsPromises = teamsId.map(checkDriver);

export const obtainTeamsArr = async () => {
  return await Promise.all(teamsId.map(checkDriver));
};

export const searchTeamByAwait = async (id) => {
  try {
    return await checkDriverAsync(id);

  } catch (e) {
    return {
      driver: 'Not Found',
      position: 99,
    };
  }
};

export const cycleTeams = async () => {
  console.time('Cycle');
  for await (const driver of teamsPromises) console.log(driver);
  console.timeEnd('Cycle');
};

export const heroeIfAwait = async (id) => {

  if ((await checkDriverAsync(id)).driver === 'Valteri Bottas') console.log(
      'Valteri Found');
  else console.log('No es');

};
