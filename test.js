import { strictEqual } from 'node:assert';
import { greeting } from './app';

try {
    strictEqual(greeting("Test"), "Hello, Test!");
    console.log("Test di integrità superato con successo.");
    process.exit(0);
} catch (err) {
    console.error("Test fallito:", err.message);
    process.exit(1);
}