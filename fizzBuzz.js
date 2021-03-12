function fizzBuzz(num) {
    num = Number(num);

    for (i=0; i <= num; i++) {
        if (i % 3 === 0) {
            document.write('Fizz');
        }
        
        if (i % 5 === 0) {
            document.write('Buzz');
        }

        if (!(i % 3 === 0 && i % 5 === 0)) {
            document.write(i);
        }

        document.write('<br>');
    }
}

fizzBuzz(100);
