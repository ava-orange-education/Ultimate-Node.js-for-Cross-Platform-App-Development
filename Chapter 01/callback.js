const a = 1;
const b = 2;
const c = a * b;
console.log(c);
doSomething();



setTimeout(() => {
    // runs after 2 seconds
}, 2000);


function callbackhellexample() {
    // first setTimeout function
    setTimeout(() => {
        console.log(10)
        // second nested setTimeout function
        setTimeout(() => {
            console.log(20)
            // third nested setTimeout function
            setTimeout(() => {
                console.log(30)
            }, 500)
        }, 2000)
    }, 1000)
};

function getSumNum(a, b) {
    const myPromise = new Promise((resolve, reject) => {
        const mul = a * b;

        if (mul <= 50) {
            resolve("Successful result")
        } else {
            reject(new Error('Reslult must be less than 50'))
        }
    })

    return myPromise
}