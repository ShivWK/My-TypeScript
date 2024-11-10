function calcArea(argu) {
    switch (argu.type) {
        case "square": {
            return argu.side * argu.side;
        }
        case 'circle': {
            return 3.14 * argu.radius * argu.radius;
        }
    }
}
console.log(calcArea({ type: 'circle', radius: 5 }));
console.log(calcArea({ type: "square", side: 10 }));
