const { Square, Circle, triangle } = require('./shapes');

describe("triangle test", () => {
    it('should render a blue triangle', () => {
        const shape = new triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<polygon points="50 15, 100 100, 0 100" fill= "blue"/>`);
    }
    );
}
);

describe("circle test", () => {
    it('should render a blue circle', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<circle cx="50" cy="50" r="40" fill= "blue"/>`);
    }
    );
}
);

describe("square test", () => {
    it('should render a blue square', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="blue"/>`);
    }
    );
}
);