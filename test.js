const assert = require('node:assert');
const { greeting } = require('./app');

try {
    assert.strictEqual(greeting("Test"), "Hello, Test!");
    console.log("Test di integrità superato con successo.");
    process.exit(0);
} catch (err) {
    console.error("Test fallito:", err.message);
    process.exit(1);
}