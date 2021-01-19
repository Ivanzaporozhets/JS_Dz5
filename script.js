//1
let calculator = {
    read() {
        this.x = +prompt("Введите число х");
        this.y = +prompt("Введите число y");
    },

    sum() {
        return this.x + this.y;
    },

    multi() {
        return this.x * this.y;
    },

    diff() {
        return this.x - this.y;
    },

    div() {
        return this.x / this.y;
    },
};

calculator.read();
alert(calculator.sum());
alert(calculator.multi());
alert(calculator.diff());
alert(calculator.div());


//2
let coffeeMachine = {
    message: "Your coffee is ready!",
    start() {
        setTimeout(() => {
            alert(this.message)
        }, 3000);
    }
};
coffeeMachine.start();


//3
let counter = {
    count: 0,
    inc() {
        this.count++;
        return this;
    },
    dec() {
        this.count--;
        return this;
    },
    getValue() {
        return this.count;
    }
}

let current = counter.inc().inc().dec().inc().dec().getValue();
alert(current);


//4
let me = {
    getSum(x, y) {
        this.x = x;
        this.y = y;
        return `${x} + ${y} = ${calculator.sum.call(me)}`;
    },

    getMulti(x, y) {
        this.x = x;
        this.y = y;
        return `${x} * ${y} = ${calculator.multi.call(me)}`;
    },

    getDiff(x, y) {
        this.x = x;
        this.y = y;
        return `${x} - ${y} = ${calculator.diff.call(me)}`;
    },

    getDiv(x, y) {
        this.x = x;
        this.y = y;
        return `${x} / ${y} = ${calculator.div.call(me)}`;
    },
};


alert(me.getSum(1, 1));
alert(me.getMulti(10, 5));
alert(me.getDiff(10, 5));
alert(me.getDiv(1, 0));


//5
let country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};
function format(start, end) {
    console.log(start + this.name + end);
}

format.call(country, "", ""); // Ukraine
format.apply(country, ["[", "]"]); // [Ukraine]
format.call(country.capital, "", ""); // Kyiv
format.apply(country.capital, ["", ""]); // Kyiv
format.apply(this, [""]); // undefined


//6
let user = {
    name: "John",
};

function format(start, end) {
    console.log(start + this.name + end);
};

let userFormat = format.bind(user);

userFormat('<<<', '>>>');


//7
let concat = (greeting, symbol, name) => {
    return () => {
        console.log(greeting + symbol + name);
    };
};

let hello = concat("Hello", " ");

hello("World");
hello("John");


//8
let cube = (x, y = 3) => {
    if (y != 1) {
        return x * cube(x, y - 1);
    };
    return x;
};
//
let cube = (x, y = 1) => {
    for (let i = 0; i < 3; i++) {
        y *= x;
    };
    return y;
};

console.log(cube(2));


//9
let sum = (...numbers) => {
    if (numbers.length > 0) {
        return numbers[0] + sum(...numbers.slice(1));
    };

    return +numbers;
}
console.log( sum(1, 2, 3, 4, 5));
