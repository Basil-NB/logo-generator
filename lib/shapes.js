class Color{
    constructor() {
        this.color = ''
    }
    setColor(color) {
        this.color = (color)
    }
};

class Square extends Color {
    render() { return `<rect x="50" height="200" width="200" fill="${this.color}"/>`}
};

class Circle extends Color {
    render() {return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill= "${this.color}"/>`}
};

class Triangle extends Color {
    render() {return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`}
};

module.exports = {Color, Square, Circle, Triangle}