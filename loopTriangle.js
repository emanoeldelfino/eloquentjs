function loopChar(num, char) {
    char = String(char);
    num = Number(num);

    for (line=char; line.length <= num; line+=char) {
        document.write(line + '<br>');
    }
}

let loops = window.prompt('Number of loops: ');
let symbol = window.prompt('Symbol to loop: ')

loopChar(num=loops, char=symbol);
