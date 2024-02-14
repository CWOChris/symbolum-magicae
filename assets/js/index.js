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

class Shape {
    constructor(color) {
        this.color = color;
    }

    render() {
        const canvas = createCanvas(200, 200);
        const context = canvas.getContext('2d');
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(100, 100, 100, 0, 2 * Math.PI);
        context.fill();
        return canvas.toBuffer().toString('utf8');
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        const canvas = createCanvas(200, 200);
        const context = canvas.getContext('2d');
        context.fillStyle = this.color;
        context.fillRect(0, 0, 200, 200);
        return canvas.toBuffer().toString('utf8');
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        const canvas = createCanvas(200, 200);
        const context = canvas.getContext('2d');
        context.fillStyle = this.color;
        context.beginPath();
        context.moveTo(100, 0);
        context.lineTo(200, 200);
        context.lineTo(0, 200);
        context.fill();
        return canvas.toBuffer().toString('utf8');
    }
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