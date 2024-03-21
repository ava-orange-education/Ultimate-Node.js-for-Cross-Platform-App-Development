
var displayGreeting = (name) => alert('Welcome ' + name);

var processUserInput = () => {
    return new Promise((resolve, reject) => {
        var name = prompt("please enter name");
        if (name) {
            resolve(name)
        }

        reject(false);
    });
}

processUserInput().then(res => displayGreeting(res));