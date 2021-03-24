import '../styles/index.scss';
import {heroeIfAwait} from './await';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

// lowPromise.then(console.log).catch(err=> console.log(err));
// normalPromise.then(console.log).catch(err=> console.log(err));
// fastPromise.then(console.log).catch(err=> console.log(err));

// Promise.race([fastPromise, lowPromise, normalPromise])
//        .then(console.log);

// checkDriverAsync('mercedecdds').then(console.log).catch(console.warn);
// console.log('HOLA MUNDO');

// obtainTeamsArr().then(console.table);
// searchTeamByAwait('ferrarddi').then(console.log).catch(console.warn);
// cycleTeams();
heroeIfAwait("ferrari");
