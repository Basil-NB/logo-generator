const inquirer = require('inquirer');
const { Color, Square, Circle, Triangle } = require('./lib/shapes');
const fs = require('fs');

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Chose a shape',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'imput',
        name: 'text',
        message: 'Enter up to 3 characters'
    },
    {
        type: 'imput',
        name: 'textColor',
        message: 'Enter color by name or number for the text'
    },
    {
        type: 'imput',
        name: 'shapeColor',
        message: 'Enter color by name or number for the shape'
    }
]

class svg {
    constructor() {
        this.shapeElement
        this.textElement
    };
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    };
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    };
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    };
};


function init() {
    inquirer.prompt(questions)
        .then(function (answer) {
            console.log(answer);


            let newShape;

            if (answer.shape === 'Square') {
                newShape = new Square();
            }
            else if (answer.shape === 'Circle') {
                newShape = new Circle();
            }
            else if (answer.shape === 'Triangle') {
                newShape = new Triangle();
            }

            newShape.setColor(answer.shapeColor);

            const newSVG = new svg();

            newSVG.setShapeElement(newShape);
            newSVG.setTextElement(answer.text, answer.textColor);

            console.log(newSVG.render());

            const svgData = newSVG.render();

            fs.writeFile('logo.svg', svgData, function (err) {
                if (err) throw err;
                console.log('Logo saved to logo.svg');
            });

        });
};


init();