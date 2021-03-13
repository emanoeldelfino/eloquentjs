function next(char, chars) {
    if (chars.includes(char)) {
        if (chars.indexOf(char) !== chars.length - 1) {
            return chars.charAt(chars.indexOf(char) + 1);
        } else {
            return chars.charAt(0);
        }
    } else {
        return null;
    }
}

function chessBoard(rows, columns, white = ' ', black = '#') {
    let first_col = white;
    let grid = '';

    for (row = 1; row <= rows; row++) {
        let line_char = first_col;
        for (column = 1; column <= columns; column++) {
            grid += line_char;
            line_char = next(line_char, white + black);
        }
        grid += '\n';

        first_col = next(first_col, white + black);
    }

    return grid;
}

rows = Number(window.prompt('Rows: '));
columns = Number(window.prompt('Columns: '));
white = String(window.prompt('Character for white spot: '));
black = String(window.prompt('Character for black spot: '));

board = chessBoard(rows = rows, columns = columns, white = white, black = black);

console.log(board);
document.write(board.replace(/(?:\r\n|\r|\n)/g, '<br>'));


// function chessBoard(size, white=' ', black='#') {
//     let grid = '';
//     for (row=0; row < size; row++) {
//         for (column=0; column < size; column++) {
//             if ((row % 2 === 0 && column % 2 === 0) || (row % 2 === 1 && column % 2 === 1)) {
//                 grid += white;
//             } else {
//                 grid += black;
//             }
//         }
//         grid += '\n';
//     }

//     return grid;
// }

// console.log(chessBoard(3));
