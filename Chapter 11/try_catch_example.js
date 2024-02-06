function exampleFunc(a, b) {
    try {
        console.log(`Value of variable a & b is : ${a}, ${b}`);
        console.log(`Division - ${a/b}`)
    } catch (e) {
        console.log("Error: " + e.description);
    }
}
exampleFunc(0, 0);