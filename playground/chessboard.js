// My overcomplicated solution

const hash = '#';
const empty = ' ';
let line = '';

function addLineBreak() {
	line += '\n';
}

function hashFirst(width) {
	for (var i = 0; i < width; i++) {
		if (i % 2 == 0) {
			line += hash;
		} else {
			line += empty;
		}
	}

	addLineBreak();
}

function emptyFirst(width) {
	for (var i = 0; i < width; i++) {
		if (i % 2 != 0) {
			line += hash;
		} else {
			line += empty;
		}
	}

	addLineBreak();
}

function createLine(width, style) {
	if (style == 0) {
		hashFirst(width);
	} else {
		emptyFirst(width);
	}
}

function createChessboard(width, height, style) {
	for (var i = 0; i < height; i++) {
		createLine(width, style);
		style = !style;
	}
}

const myGrid = {
	width: 10,
	height: 10,
	style: 0,
};

createChessboard(myGrid.width, myGrid.height, myGrid.style);
console.log(line);

// Simpler solution

// width = 8;
// height = 8;
// board = '';

// for (var x = 0; x < width; x++) {
// 	for (var y = 0; y < height; y++) {
// 		board += y % 2 === x % 2 ? ' ' : '#';
// 	}
// 	board += '\n';
// }

// console.log(board);
