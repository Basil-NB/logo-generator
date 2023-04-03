const inquirer = require('inquirer');
const {circle, square, triangle} = require('./lib/shapes');

const questions = [
    {
        type:'imput',
        name:'text',
        message:'Enter up to 3 characters'
    }
    {
        type:'list',
        name:'shape',
        message:'Chose a shape',
        Choices: ['circle', 'square', 'triangle']
    }
    {
        type:'imput',
        name:'text-color',
        message:'Enter color by name or number'
    }
    {
        type:'imput',
        name:'shape-color',
        message:'Enter color by name or number'
    }
]