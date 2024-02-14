const shape = new Triangle();
shape.setColor("red");
expect(shape.render()).toEqual('<polygon points="100,0 200,200 0,200" fill="red"/>');
