const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

async function makeLogoMagic() {
    const text = await inquirer.prompt({
        type: 'input',
        name: 'text',
        message: 'What three characters would you like to use for your logo?',
        validate: value => value.length === 3 ? true : 'Please enter exactly three characters.'
    });

    const textColor = await inquirer.prompt({
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be?'
    });

    const backgroundColor = await inquirer.prompt({
        type: 'input',
        name: 'backgroundColor',
        message: 'What color would you like the background to be?'  // may need to change this to fill color
    });

    const shapeShape = await inquirer.prompt({
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to use?',
        choices: ['Circle', 'Square', 'Triangle']
    });

    const shape = newShape(shapeShape.shape, backgroundColor.backgroundColor);

    const logoSVGContent = `
    <svg width="300" height="300">
        ${shape.render()}
        <text x="150" y="150" text-anchor="middle" fill="${textColor.textColor}">${text.text}</text>
    </svg>
    `;

    fs.writeFileSync('logo.svg', logoSVGContent);
    console.log('Your logo has been created! Open logo.svg to view it.');
}


function newShape(shape, color) {
    switch (shape) {
        case 'Circle':
            return new Circle(color);
        case 'Square':
            return new Square(color);
        case 'Triangle':
            return new Triangle(color);
        default:
            throw new Error('Invalid shape');
    }
}

makeLogoMagic();