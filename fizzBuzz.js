function fizzBuzz(i) {
    i = Number(i);

    let word;

    for (num=1; num <= i; num++) {
        output = '';

        if (num % 3 === 0 || num % 5 === 0) {
            if (num % 3 === 0) {
                output += 'Fizz';
            } 
            if (num % 5 === 0) {
                output += 'Buzz';
            }
        } else {
            output = num;
        }

        console.log(output);
    }
}

let iters = Number(window.prompt('How many iterations?'))

fizzBuzz(iters);
