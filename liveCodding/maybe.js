class Maybe {
  static of(value) {
    return new Maybe(value);
  }
  constructor(value) {
    this.__value = value;
  }

  map(fn) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(fn(this.__value));
  }

  isNothing() {
    return this.__value === null || this.__value === undefined;
  }
}

Maybe.of("Hello")
  .map(x => x.match(/l/gi))
  .map(x => x.length); /*?*/
