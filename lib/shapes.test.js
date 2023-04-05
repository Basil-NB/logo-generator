const { Square, Circle, Triangle } = require('./shapes');

describe("triangle test", () => {
    it('should render a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="blue">`);
    }
    );
}
);

describe("circle test", () => {
    it('should render a blue circle', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill= "blue"/>`);
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