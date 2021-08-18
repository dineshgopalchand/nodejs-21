var noOfLine = 5;
var pattern = '';
var maxStar = noOfLine * 2 - 1;
for (var i = 0; i < maxStar / 2; i++) {
    for (var s = 0; s < i; s++) {
        pattern += ' ';
    }
    for (var j = 0; j < maxStar - 2 * i; j++) {
        pattern += '*';
    }
    pattern += '\n';
}
for (var i = 1; i < maxStar / 2; i++) {
    for (var s = maxStar / 2 - i - 1; s > 0; s--) {
        pattern += ' ';
    }
    for (var j = maxStar - 2 * i - 1; j < maxStar; j++) {
        pattern += '*';
    }
    pattern += '\n';
}
console.log(pattern);