const fs = require('fs');
const readline = require('readline');
const { createCanvas } = require('canvas');

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question) {
    return new Promise((resolve) => {
        readLine.question(question, (answer) => {
            resolve(answer);
        });
    });
}

async function logoGenerator() {
    const text = await askQuestion('What three characters would you like to use for your logo? ');
    const color = await askQuestion('What color would you like your logo to be? ');
    const backgroundColor = await askQuestion('What color would you like the background to be? ');
    const shape = await askQuestion('What shape would you like your logo to be? (circle, square, triangle) ');

    let shapeObject;
    switch (shape) {
        case 'circle':
            shapeObject = new Shape(color);
            break;
        case 'square':
            shapeObject = new Square(color);
            break;
        case 'triangle':
            shapeObject = new Triangle(color);
            break;
        default:
            console.log('Invalid shape');
            // process.exit(1);
            return;
    }

const svgCreatorElement = shapeObject.render();
fs.writeFileSync('logo.svg', svgCreatorElement);

console.log('Logo created with pure magic!');
readLine.close();
}

logoGenerator();