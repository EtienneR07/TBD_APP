const crypto = require('crypto');

const generateSessionSecret = () => {
  return crypto.randomBytes(32).toString('hex');
};

const sessionSecret = generateSessionSecret();
console.log('Generated session secret:');
console.log(sessionSecret);