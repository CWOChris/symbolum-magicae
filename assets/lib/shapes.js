class Shape {
    constructor(color, magicCanvasFunction) {
        this.color = color;
        this.magicCanvas = magicCanvasFunction;
    }

    render() {
        const canvas = this.magicCanvas(200, 200);
        const context = canvas.getContext('2d');
        context.fillStyle = this.color;
        throw new Error('You have to implement the render method');
    }
}

class Circle extends Shape {
    constructor(color, magicCanvasFunction) {
        super(color, magicCanvasFunction);
    }

    render() {
        const canvas = this.magicCanvas(200, 200);
        const context = canvas.getContext('2d');
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(100, 100, 100, 0, 2 * Math.PI);
        context.fill();
        return canvas.toBuffer().toString('utf8');
    }
}

class Square extends Shape {
    constructor(color, magicCanvasFunction) {
        super(color, magicCanvasFunction);
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
    constructor(color, magicCanvasFunction) {
        super(color, magicCanvasFunction);
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

module.exports = {
    Shape,
    Circle,
    Square,
    Triangle
};