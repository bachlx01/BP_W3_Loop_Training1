function excercise1() {
    for (i = 1; i < 101; i++) {
        document.write(i);
        if (i == 99) {
            document.write(' Complete');
        }
        document.write('<br>');
    }
}

function excercise2() {
    //let celsius;
    do {
        let celsius;
        celsius = prompt('Enter the celsius: ');
        if (celsius < 20) {
            alert('Please up the celsius!');
        } else if (celsius > 100) {
            alert('Please reduce the celsius!');
        }
    }
    while (celsius < 20 || celsius > 100);
}

function excercise3() {
    let a = 0;
    let b = 1;
    let c = 0;
    for (i = 0; i < 20; i++) {
        document.write(i + 1 + '. ' + b + '<br>')
        c = b + a;
        a = b;
        b = c;
    }
}

function excercise4() {
    let a = 0;
    let b = 1;
    let c = 0;
    for (i = 0; i < 20;) {
        if (b % 5 == 0) {
            document.write(b + ' is the first number in fibonacci series divisible by 5');
            break;
        }
        c = b + a;
        a = b;
        b = c;
    }
}

function excercise5() {
    let a = 0;
    let b = 1;
    let c = 0;
    let total = 0;
    for (i = 0; i < 20; i++) {
        total += b;
        c = b + a;
        a = b;
        b = c;
    }
    alert('Sum of 20 first numbers in Fibonacci series is: ' + total);
}

function excercise6() {
    let total = 0;
    let count = 0;
    for (i = 0; count < 31; i++) {
        if (i % 7 == 0) {
            total +=i;
            count++;
        }
    }
    alert(total);
}

function excercise7() {
    for (i = 1; i < 101; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            document.write('FizzBuzz <br>');
        } else if (i % 3 == 0) {
            document.write('Fizz <br>');
        } else if (i % 5 == 0) {
            document.write('Buzz <br>');
        } else {
            document.write(i + ' <br>');
        }
    }
}

function excercise8() {
    document.write('<button id="start"> Start game </button><button id="again"> Play again </button>');
    document.getElementById('start').addEventListener('click', playGame);

}

var playGame = function game() {
    let min = +prompt('Enter the min number:');
    let max = +prompt('Enter the max number:');
    let numberRandom = Math.round(Math.random() * (max - min) + min);
    let guess;
    for (i = 0; i < 3; i++) {
        guess = prompt('Enter your number: ');
        if (guess == numberRandom) {
            alert('You win! Congratulation!')
            break;
        } else if (guess < numberRandom) {
            alert('it is so small! Enter again!');
        } else {
            alert('It is so over! Enter again!');
        }

    }

}
