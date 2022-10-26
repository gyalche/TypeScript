class Coordinate {
  protected x: number; // by using protected we cannot add another value to it and cannot even access the value;

  // in private the properties are accessable only inside this class;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  //its a public method;
  public getX() {
    return this.x;
  }
}

class MyCoordinate extends Coordinate {}

const point = new Coordinate(46, 9);
console.log(point.getX());
