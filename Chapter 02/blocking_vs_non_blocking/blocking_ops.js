console.log(Date.now().toString() + ': Starting program');
const startTime = Date.now();
let endTime = startTime;
while (endTime < startTime + 20) {
    endTime = Date.now();
}
console.log(Date.now().toString() + ' Program Ends');