const EventEmitter = require('events');

class Salary extends EventEmitter {
    constructor(basic, tax) {
        super();
        this._basic = basic;
        this._tax = tax;
    }
    set basic(newBasic) {
        if (newBasic !== this._basic) {
            this.emit('BasicChanged', {
                tax: this._tax,
                oldBasic: this._basic,
                newBasic: newBasic,
                adjustment: ((newBasic - this._basic) * 100 / this._basic).toFixed(2)
            });
        }
    }
    get basic() {
        return this._basic;
    }
    get tax() {
        return this._tax;
    }
}

const sal = new Salary(1000, 10);

sal.on('BasicChanged', (arg) => {
    console.log(`The salary has changed ${arg.adjustment}%`);
})

sal.basic = 1720;
