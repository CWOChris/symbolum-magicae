const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    test('renders a circle', () => {
        const circle = new Circle('red');
        expect(circle.render()).toBe('<circle cx="100" cy="100" r="100" fill="red"/>');
    });
});

describe('Square', () => {
    test('renders a square', () => {
        const square = new Square('blue');
        expect(square.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="blue"/>');
    });
});

describe('Triangle', () => {
    test('renders a triangle', () => {
        const triangle = new Triangle('green');
        expect(triangle.render()).toBe('<polygon points="100,50 0,100 200,100" fill="green"/>');
    });
});