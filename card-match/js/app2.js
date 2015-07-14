var Card = function(x, y) {
    this.x = x;
    this.y = y;
    this.width = 70;
};

Card.prototype.drawFaceDown = function() {
    fill(214, 247, 202);
    strokeWeight(2);
    rect(this.x, this.y, this.width, this.width, 10);
    image(getImage("bicycle-back.png"), this.x, this.y, this.width, this.width);
};

// Create the array of tiles at appropriate positions
var cards = [];
var NUM_COLS = 5;
var NUM_ROWS = 4;
for (var i = 0; i < NUM_COLS; i++) {
    for (var j = 0; j < NUM_ROWS; j++) {
        cards.push(new Card(i * 78 + 10, j * 78 + 40));
    }
}

// Start by drawing them all face down
for (var i = 0; i < cards.length; i++) {
    cards[i].drawFaceDown();
}