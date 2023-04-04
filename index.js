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
        message: 'Enter color by name or number'
    },
    {
        type: 'imput',
        name: 'shape-color',
        message: 'Enter color by name or number'
    }
]

function init() {
    inquirer.prompt(questions)
        .then(function (answer) {
            console.log(answer);
        });
};

init();

