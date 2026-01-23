function greeting(name) {
    return `Hello, ${name}!`;
}

module.exports = { greeting };

if (require.main === module) {
    console.log(greeting("Baseline User"));
}