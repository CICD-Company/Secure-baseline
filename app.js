function greeting(name) {
    return `Hello, ${name}!`;
}

export default { greeting };

if (require.main === module) {
    console.log(greeting("Baseline User"));
}