function areaOfSquare(side) {
    return side*side;
}
function areaOfRectangle(length,breath) {
    return length*breath;
}
function areaOfCricle (radius) {
    return 3.14*radius*radius;
}

module.exports= {
    square: areaOfSquare,
    rectangle: areaOfRectangle,
    circle: areaOfCricle,
}