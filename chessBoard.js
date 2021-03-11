function next(char, white, black) {
    if (char === white) {
        return black;
    } else {
        return white;
    }
}

function chessBoard(rows, columns, white, black) {
    let start = white;
    for (row=0; row <= rows; row++) {
        let inner = start;
        for (column=0; column <= columns; column++) {
            document.write(inner);
            inner = next(inner, white, black);
        }
        document.write('<br>');

        start = next(start, white, black);
    }
}

rows = Number(window.prompt('Rows: '));
columns = Number(window.prompt('Columns: '));
white = String(window.prompt('Character for white spot: '));
black = String(window.prompt('Character for black spot: '));

chessBoard(rows=rows, columns=columns, white=white, black=black);
