const inquirer = require('inquirer');
const { Square, Circle, triangle } = require('./lib/shapes');
const fs = require('fs');

const questions = [
    {
        type: 'imput',
        name: 'text',
        message: 'Enter up to 3 characters'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Chose a shape',
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: 'imput',
        name: 'text-color',
        message: 'Enter color by name or number for the text'
    },
    {
        type: 'imput',
        name: 'shape-color',
        message: 'Enter color by name or number for the shape'
    }
]

class svg {
    constructor() {
        this.textElement
        this.shapeElement
    };
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.textElement}${this.shapeElement}</svg>`
    };
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">"${text}"</text>`
    };
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    };
};

// function to render svg based on user input
function init() {
    inquirer.prompt(questions)
        .then(function (answer) {
            console.log(answer);
        });

    if (condition) {
        
    }
};

init();



