const fs = require('fs');

fs.appendFileSync(
  '/tmp/postinstall-evidence.txt',
  'INTERNAL-LOGGER POSTINSTALL SCRIPT EXECUTED\n'
);