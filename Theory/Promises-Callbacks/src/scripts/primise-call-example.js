import {checkDriver} from './promise';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('HOLA MUNDO');

// checkDriver('mercedes', (err,team) => console.log(team || err));
// checkDriver('feddrrari', (err,team) => console.log(team || err));

// Promises

setTimeout(() => {
  checkDriver('mercedddes'). // The Promise is not block the rest of the code
      then(res => console.log(`The Driver :${res.driver}`)).
      catch(error => console.warn(error));
}, 2000);

Promise.all([
  checkDriver('renault'),
  checkDriver('ferrasdri')]).then(([renault, ferrari]) => {
  console.log(`Renault :${renault.driver}`);
  console.log(`Ferrari :${ferrari.driver}`);
}).catch(err => console.log(err));

console.log('Hey');