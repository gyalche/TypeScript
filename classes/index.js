"use strict";
class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getX() {
        return this.x;
    }
}
const point = new Coordinate(46, 9);
console.log(point.getX());
