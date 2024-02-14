const fs = require('fs');
const readline = require('readline');
const { createCanvas } = require('canvas');
const { Shape, Circle, Square, Triangle } = require('../lib/shapes.js');

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

async function magicLogoMaker() {
    const text = await askQuestion('What three characters would you like to use? ');
    const textColor = await askQuestion('What color would you like the text to be? ');
    const shapeColor = await askQuestion('What color would you like the shape to be? ');
    const shape = await askQuestion('What shape would you like to use? (circle, square, triangle) ');

    const shapeObject = new Shape(shapeColor, createCanvas);

    switch (shape) {
        case "circle":
            shapeObject = Circle;
            break;
        case "square":
            shapeObject = Square;
            break;
        case "triangle":
            shapeObject = Triangle;
            break;
        default:
            console.log('Invalid shape');
            process.exit(1);
}

    const logoFileMaker = shapeObject.render();
    fs.writeFileSync('logo.svg', logoFileMaker);

    console.log('Logo created with pure otherworldly magic!');
    readLine.close();
}

magicLogoMaker();