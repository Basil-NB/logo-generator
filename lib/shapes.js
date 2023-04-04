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
    render() {return `<circle cx="50" cy="50" r="40" fill= "${this.color}"/>`}
};

class triangle extends Color {
    render() {return `<polygon points="50 15, 100 100, 0 100" fill= "${this.color}"/>`}
};

module.exports = {Square, Circle, triangle}