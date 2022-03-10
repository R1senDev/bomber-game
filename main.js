// Привязка и настройка холста
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 750;
canvas.height = 500;

let map = new Map();
let bombs = [];
let timeToBlow = 3;

let floorSprite = new Image();
floorSprite.src = 'floor.png';
let wallSprite = new Image();
wallSprite.src = 'wall.png';

class Bomb {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.explosionTimeout = setTimeout(function() {
			this.sprite = 'explosion.gif';
			setTimeout(function() {
				delete this;
			}, 3000);
		}, timeToBlow * 1000);

		this.sprite = new Image();
		this.sprite.src = 'bomb.gif';
	}
	get pos() {
		return {x: this.x, y: this.y};
	}
	set pos(value) {
		this.x = value[0];
		this.y = value[1];
	}
}

class Player {
	constructor(x, y, type) {
		this.x = x;
		this.y = y;
		this.type = type;
		this.hp = 100;

		this.sprite = new Image();
		this.sprite.src = 'player1.gif';
	}
	get pos() {
		return {x: this.x, y: this.y};
	}
	set pos(value) {
		this.x = value[0];
		this.y = value[1];
	}
	placeBomb() {
		bombs.push(new Bomb(this.x, this.y));
	}
}

function howToPlay() {
	alert('');
}

// Рендерит
// .
function redraw() {

}

let players = [new Player(0, 0, 'player')];











/* Yes, I stole the algorithm by @lord-laminat, but he didn't mind :))

int generateRoom(char type) {
	int buf = rand() % path.size();
	int cellId = path[buf];
	maze[cellId].SetType(type);
	path.erase(path.begin() + buf);
	return cellId;
}
void levelClear() {
	maze.clear();
	for (int i = 0; i < SIZE; i++) {
		maze.push_back(room('X'));
	}
	for (int i = 0; i < SIZE - 2; i++) {
		maze.push_back('X');
		for (int j = 0; j < SIZE - 2; j++) {
			maze.push_back(room(j+1, i+1, '*'));
		}
		maze.push_back('X');
	}
	for (int i = 0; i < SIZE; i++) {
		maze.push_back(room('X'));
	}
}
*/