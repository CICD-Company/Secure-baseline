export function greeting(name) {
    return `Hello, ${name}!`;
}

import { fileURLToPath } from 'node:url';

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    console.log(greeting("Baseline User"));
}