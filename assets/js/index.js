const fs = require('fs');
const readline = require('readline');
const { createCanvas, loadImage } = require('canvas');

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question) {
    return new Promise((resolve, reject) => {
        readLine.question(question, (answer) => {
            resolve(answer);
        });
    });
}

async function makeLogo() {
    const text = await prompt("What 3 letters would you like to use?");
    const textColor = await prompt("What color would you like the text to be?");
    const backgroundColor = await prompt("What color would you like the background to be?");
    const shape = await prompt("What shape would you like? (circle, square, or triangle)");

    const canvas = createCanvas(200, 200);
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = backgroundColor;
    switch (shape) {
        case "circle":
            ctx.beginPath();
            ctx.arc(100, 100, 100, 0, Math.PI * 2);
            ctx.fill();
            break;
        case "square":
            ctx.fillRect(0, 0, 200, 200);
            break;
        case "triangle":
            ctx.beginPath();
            ctx.moveTo(100, 0);
            ctx.lineTo(200, 200);
            ctx.lineTo(0, 200);
            ctx.fill();
            break;
        default:
            console.log("Invalid shape");
            process.exit(1);
            return;
}

ctx.fillStyle = textColor;
ctx.font = 'bold 48px Impact';
ctx.textAlign = 'center';
ctx.fillText(text, 100, 100);

const svgFileCreator = canvas.toBuffer().toString('utf8');
fs.writeFileSync('logo.svg', svgFileCreator);

console.log("Logo created!");

rl.close();
}

makeLogo();