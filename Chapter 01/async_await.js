const getUserData = async () => {
    var data = {firstname: 'john', lastname: 'Doe' };
    return data;
}

getUserData().then(data => console.log(`Full name ${data.lastname} ${data.lastname}`));

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sumOperationAsync(x, y) {
    // this code waits here for 500 milliseconds
    await sleep(500);
    // done waiting. let's calculate and return the value
    return x+y;
}

// sumOperationAsync is an async function, which means it returns a Promise.
sumOperationAsync(5, 7).then((result) => {
    console.log("The result of the addition is:", result);
})