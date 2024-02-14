class Shape {
    constructor(color) {
        this.color = color;
    }

    render() {
        throw new Error('render method must be implemented');
    }
}

class Circle extends Shape {
    render() {
        return '<circle cx="100" cy="100" r="100" fill="' + this.color + '"/>';
    }
}

class Square extends Shape {
    render() {
        return '<rect x="50" y="50" width="200" height="200" fill="' + this.color + '"/>';
    }
}

class Triangle extends Shape {
    render() {
        return '<polygon points="100,50 0,100 200,100" fill="' + this.color + '"/>';
    }
}

module.exports = { Shape, Circle, Square, Triangle };